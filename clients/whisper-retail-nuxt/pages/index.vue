<template>
  <div class="confession-page">
    <div class="page-actions">
      <div class="confession-sorting">
        <WhisperSortButton class="sort-item newest" label="Newest" @click="sortConfessions('creationDate')"
          :isActive="confessionList !== null && confessionList.length > 0 && sortBy === 'creationDate'" />
        <WhisperSortButton @click="sortConfessions('likeCount')" class="sort-item trending" label="Trending"
          :isActive="confessionList !== null && confessionList.length > 0 && sortBy === 'likeCount'" />
        <WhisperSortButton @click="sortConfessions('dislikeCount')" class="sort-item controverial" label="Controversial"
          :isActive="confessionList !== null && confessionList.length > 0 && sortBy === 'dislikeCount'" />
      </div>
      <WhisperIconButton class="submit-new-confession" label="Confess" icon="material-symbols:edit-outline-rounded"
        @click="open" />
    </div>
    <div v-if="!isLoadingConfessionList && confessionList !== null && confessionList.length > 0"
      class="confession-list-scroller" ref="confessionListScroller">
      <div v-for="(confession, key, index) in confessionList" :key="confession.id" class="card" ref="cards"
        :data-index="key">
        <WhisperConfessionCard :confession="confession" :isFirst="key == 0"
          :shouldPrefetchNextCard="currentCardIndex + 1 == key" />
      </div>
    </div>
    <div class="no-confessions" v-else-if="isLoadingConfessionList">Loading...</div>
    <div class="no-confessions" v-else>Nobody yet confessed anything</div>
    <client-only>
      <vue-bottom-sheet v-if="bottomModalClearInputsHack" ref="newConfessionBottomSheet">
        <div class="bottom-sheet-modal">
          <div class="modal-header">
            <h2 class="title">Confess something</h2>
            <WhisperIconButton class="submit-new-confession" icon="fluent:checkmark-12-filled" @click="newConfess" />
          </div>
          <form>
            <WhisperInput label="Title" id="title" v-model="confessionTitle" />
            <WhisperInput label="Confession" id="confession" isTextArea v-model="confessionContent" />
          </form>
        </div>
      </vue-bottom-sheet>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";
import "@webzlodimir/vue-bottom-sheet/dist/style.css";
import { ConfessionLikedStatus, Post } from '~/types/Post';
const snackbar = useSnackbar();
const sortBy: Ref<String> = ref('creationDate');
const newConfessionBottomSheet: Ref<any> = ref(null)
const { data } = await useFetch('/api/confessions');
const confessionList: Ref<any> = ref(data);
const confessionListScroller: Ref<any> = ref(null)
// bottom modal is not destroyed and inputs then are still filled
// this also prevents user to submit multiple times until request is finished
const bottomModalClearInputsHack: Ref<boolean> = ref(true)
const isLoadingConfessionList: Ref<boolean> = ref(false)
const confessionTitle = ref('');
const confessionContent = ref('');

const notifyUserAboutSuccessfulPost = () => {
  snackbar.add({
    type: 'success',
    text: 'Your post will be available as soon as Administrator accepts it'
  })
}

const sortConfessions = async (sortField: string) => {
  if (isLoadingConfessionList.value) return;

  isLoadingConfessionList.value = true;
  const { data } = await useFetch('/api/confessions', {
    method: "GET",
    params: {
      sortField: sortField,
      sortOrder: 'desc',
    }
  });
  if (data.value) {
    confessionList.value = null;
    sortBy.value = sortField;
    setTimeout(() => {
      // confessionListScroller.value.scrollTop = 0;
      confessionList.value = [...data.value];
      isLoadingConfessionList.value = false;
      currentCardIndex.value = 0;
    }, 500);
  }
}

const open = () => {
  if (newConfessionBottomSheet.value !== null) {
    newConfessionBottomSheet.value.open();
  }
}

const close = () => {
  if (newConfessionBottomSheet.value !== null) {

    newConfessionBottomSheet.value.close();

    bottomModalClearInputsHack.value = false;

    notifyUserAboutSuccessfulPost()
    bottomModalClearInputsHack.value = true;
  }
}

const newConfess = async () => {
  let anonymousUserID: string = localStorage.getItem('anonymousUserID') ?? "";

  if (!anonymousUserID) {
    try {
      await nextTick()

      const { data } = await useFetch('/api/users', {
        method: "POST",
      });

      const anonymousUserID: any = toRaw(data.value);
      localStorage.setItem('anonymousUserID', anonymousUserID.id);
    } catch (error) {
      console.error('Error fetching anonymousUserID:', error);
    }
  }

  anonymousUserID = localStorage.getItem('anonymousUserID') ?? "";

  const { data } = await useFetch(`/api/confessions`, {
    method: "POST",
    params: {
      confessionTitle,
      confessionContent,
      anonymousUserID
    }
  });

  console.log(toRaw(data.value));
  if (data.value) {
    console.log("data.value");
    console.log(data.value);
    close();
  }
}

const currentCardIndex = ref(0);

const scrollNextCardIntoView = (entries: any[]) => {
  entries.forEach((entry: { isIntersecting: any; target: { nextElementSibling: any; }; }) => {
    if (entry.isIntersecting) {
      const nextCard = entry.target.nextElementSibling;

      if (nextCard) {
        currentCardIndex.value = parseInt(nextCard.getAttribute('data-index'));

        window.scrollTo({
          top: nextCard.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(scrollNextCardIntoView, {
    threshold: 1.0
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => observer.observe(card));
});

onUpdated(() => {
  const observer = new IntersectionObserver(scrollNextCardIntoView, {
    threshold: 1.0
  });

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => observer.observe(card));
});


</script>

<style lang="scss" scoped>
.confession-page {
  display: flex;
  flex-direction: column;
  color: rgb(226, 226, 226);
  align-items: center;
  // align-items: stretch;
  overflow: hidden;
  row-gap: 2rem;

  .page-actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: column-reverse;
      width: 90%;
      margin-top: 1rem;
    }

    .confession-sorting {
      justify-content: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 1rem;
    }

    .submit-new-confession {
      @media (max-width: 800px) {
        // quick and hacky way
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
    }
  }

  .confession-list-scroller {
    align-items: center;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: start;
    height: 100%;
    align-self: stretch;
    text-align: -webkit-center;


    .card {
      scroll-snap-align: start;
      height: 90%;
    }

    /* width */
    &::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background-color: black;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background-color: rgb(32, 31, 35);
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: hsl(0, 0%, 33%);
    }
  }

  .no-confessions {
    margin: auto;
    font-style: italic;
    color: rgb(117, 116, 128);
  }
}


.bottom-sheet-modal {
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .title {
      color: hsl(0, 0%, 89%);
      font-size: 24px;
    }

  }


  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

}
</style>
