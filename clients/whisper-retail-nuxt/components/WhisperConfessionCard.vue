<template>
  <div class="confession-card-row" :class="{ expand: isDetails }">
    <div class="confession-card">
      <div class="card-header">
        <div class="title">
          <div v-if="isDetails" class="card-title card-title-details">{{ confession.title }}</div>
          <NuxtLink v-else :to="confession.id" class="card-title">{{ confession.title }}</NuxtLink>
          <div class="card-date">{{ timeAgo(confession.creationDate) }}</div>
        </div>
        <!-- <div class="share">share</div> todo: later -->
      </div>
      <div v-if="isDetails" class="card-content card-content-details">
        {{ confession.content }}
      </div>
      <div v-else class="card-content">
        {{ formatContent() }}<NuxtLink v-if="confession.content.length >= 2800" :to="confession.id" class="read-more">
          ...Read More</NuxtLink>
      </div>
    </div>
    <div class="card-actions">
      <div class="action">
        <Icon class="icon" @click="handleLike" :name="isLiked ? 'solar:like-bold-duotone' : 'solar:like-broken'" />
        <div class="label">{{ formatCount(confession.likeCount) }}</div>
      </div>
      <div class="action">
        <Icon class="icon" @click="handleDislike"
          :name="isDisliked ? 'solar:dislike-bold-duotone' : 'solar:dislike-broken'" />
        <div class="label">{{ formatCount(confession.dislikeCount) }}</div>
      </div>
      <!-- todo: add comments -->
      <div v-if="false" class="action">
        <Icon class="icon" name="simple-line-icons:bubble" />
        <div class="label">{{ formatCount(confession.commentCount) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { timeAgo } from '~/utils/utils';

const props = defineProps({
  confession: Object as PropType<any>,
  isDetails: Boolean,
  shouldPrefetchNextCard: Boolean,
  isFirst: Boolean,
});
const { confession, isDetails } = props;

const isLiked: Ref<Boolean> = ref(false);
const isDisliked: Ref<Boolean> = ref(false);
const isStatusFetched: Ref<Boolean> = ref(false);

const checkForLikeStatus = async () => {
  const anonymousUserID = await getAnonymousUserID();

  const { data } = await useFetch(`/api/confessions/likes/${confession.id}`, {
    method: "GET",
    params: {
      anonymousUserID,
      itemId: confession.id,
    }
  });

  if (data.value) {
    isLiked.value = true;
    isDisliked.value = false;
  }
}
const checkForDislikeStatus = async () => {
  const anonymousUserID = await getAnonymousUserID();

  const { data } = await useFetch(`/api/confessions/dislikes/${confession.id}`, {
    method: "GET",
    params: {
      anonymousUserID,
      itemId: confession.id,
    }
  });

  if (data.value) {
    isLiked.value = false;
    isDisliked.value = true;
  }

}
const handleLike = async () => {
  if (isLiked.value) return;

  const anonymousUserID = await getAnonymousUserID();

  const { data } = await useFetch('/api/confessions/likes', {
    method: "PATCH",
    params: {
      anonymousUserID,
      itemId: confession.id,
    }
  });

  if (data.value) {
    isLiked.value = true;
    isDisliked.value = false;

    // todo add error handling
    const { data } = await useFetch(`/api/confessions/${confession.id}`, {
      method: "GET",
      params: {
        itemId: confession.id,
      }
    });
    const updatedConfession = toRaw(data.value);

    confession.likeCount = updatedConfession.likeCount;
    confession.dislikeCount = updatedConfession.dislikeCount;
    confession.commentCount = updatedConfession.commentCount;
  }
}

const handleDislike = async () => {
  if (isDisliked.value) return;

  const anonymousUserID = await getAnonymousUserID();

  // todo add error handling
  const { data } = await useFetch('/api/confessions/dislikes', {
    method: "PATCH",
    params: {
      anonymousUserID,
      itemId: confession.id,
    }
  });

  if (data.value) {
    isLiked.value = false;
    isDisliked.value = true;

    const { data } = await useFetch(`/api/confessions/${confession.id}`, {
      method: "GET",
      params: {
        itemId: confession.id,
      }
    });
    const updatedConfession = toRaw(data.value);

    confession.likeCount = updatedConfession.likeCount;
    confession.dislikeCount = updatedConfession.dislikeCount;
    confession.commentCount = updatedConfession.commentCount;
  }
}


const formatCount = (count: number) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k';
  }
  return count;
};

const formatContent = () => {
  if (confession.content.length >= 2800) {
    return confession.content.substring(0, 2400)
  }
  return confession.content;
};

const getAnonymousUserID = async () => {
  let anonymousUserID: string = localStorage.getItem('anonymousUserID') ?? "";

  if (!anonymousUserID) {
    const { data } = await useFetch('/api/users', {
      method: "POST",
    });

    const anonymousUser: any = toRaw(data.value);
    localStorage.setItem('anonymousUserID', anonymousUser.id);
    anonymousUserID = anonymousUser.id;
  }

  return anonymousUserID;
}

onMounted(() => {
  if (isStatusFetched.value) {
    return;
  }

  if (props.isFirst) {
    checkForLikeStatus();
    checkForDislikeStatus();
    isStatusFetched.value = true
  }
});

watch(() => props.shouldPrefetchNextCard, (newValue, oldValue) => {
  if (isStatusFetched.value) {
    return;
  }
  if (oldValue) {
    checkForLikeStatus();
    checkForDislikeStatus();
    isStatusFetched.value = true
  }
});
</script>

<style lang="scss" scoped>
.confession-card-row {
  display: flex;
  flex-direction: row;
  max-width: 800px !important;
  max-height: 90% !important;

  .confession-card {
    flex: 9;
    background-color: hsl(255, 6%, 13%);
    width: 75ch; // ux
    padding: 1rem;
    margin: 1rem;
    border-radius: 12px;
    border: 1px solid hsl(250, 5%, 26%);
    justify-content: space-between;
    text-align: left;

    .card-header {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;

      @media (max-width: 800px) {
        margin-bottom: 0.5rem;
      }

      .title {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        -webkit-user-select: none;
        /* Safari */
        -ms-user-select: none;
        /* IE 10 and IE 11 */
        user-select: none;
        /* Standard syntax */

        .card-title {
          margin-bottom: 8px;
          font-weight: 500;
          text-transform: capitalize;
          color: hsl(0, 0%, 89%);
          font-size: 1.5rem;

          @media (max-width: 800px) {
            font-size: 1rem;
          }

          &:hover {
            color: rgb(117, 116, 128);
          }

          &:active {
            color: rgb(226, 226, 226);
          }
        }

        .card-title-details {
          color: hsl(0, 0%, 89%);
          cursor: auto;

          &:hover {
            color: hsl(0, 0%, 89%);
          }
        }

        .card-date {
          font-style: italic;
          color: rgb(117, 116, 128);

          @media (max-width: 800px) {
            font-size: 0.9rem;
          }
        }
      }
    }

    .card-content {
      overflow-wrap: break-word;
      flex: 2;
      line-height: 1.4rem;
      color: rgb(226, 226, 226);
      display: -webkit-box;
      -webkit-line-clamp: 30;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 1rem;

      @media (max-width: 800px) {
        -webkit-line-clamp: 12;
        font-size: 0.8rem;
      }

      .read-more {
        cursor: pointer;
        color: rgb(117, 116, 128);
        -webkit-user-select: none;
        /* Safari */
        -ms-user-select: none;
        /* IE 10 and IE 11 */
        user-select: none;
        /* Standard syntax */

        &:hover {
          color: rgb(226, 226, 226);
        }

        &:active {
          color: rgb(117, 116, 128);
        }
      }
    }

    .card-content-details {
      -webkit-line-clamp: unset;
    }

  }

  .card-actions {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: end;
    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */

    .action {
      margin: 1rem;
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      .label {
        color: white;
      }

      .icon {
        width: 44px;
        height: 30px;
        border-radius: 50%;
        display: grid;
        place-content: center;
        cursor: pointer;
        color: white;
      }
    }
  }
}

.expand {
  max-height: none !important;
}
</style>