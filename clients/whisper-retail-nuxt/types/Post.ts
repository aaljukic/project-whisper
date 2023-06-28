export interface Post {
  id: string;
  title: string;
  content: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
  creationDate: string;
  anonymousStatus: ConfessionLikedStatus;
}

export enum ConfessionLikedStatus {
  NOT_INTERACTED = 0,
  LIKED = 1,
  DISLIKED = 2,
}
