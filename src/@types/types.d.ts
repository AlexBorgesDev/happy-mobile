import { Image } from 'react-native-image-crop-picker';
import { LoggedInScreens } from './navigation';
import { StackNavigationProp } from '@react-navigation/stack';

export type User = {
  name: string;
  email: string;
  image: string;
};

export type PostType = {
  id: number;
  slug: string;
  title: string;
  liked: boolean;
  saved: boolean;
  content: string;
  createAt: string | Date;
  updateAt: string | Date;
  author: {
    name: string;
    image: string;
  };
};

export type ApiReturnPosts = {
  page: number;
  take: number;
  data: PostType[];
  total: number;
};

export type PostAuthorProps = {
  updateAt: string | Date;
  author: {
    name: string;
    image: string;
  };
};

export type PostContentProps = {
  id: number;
  liked: boolean;
  content: string;
  onLiked: (liked: boolean) => void;
};

export type PostLikeProps = {
  id: number;
  liked: boolean;
  onLiked: (liked: boolean) => void;
};

export type CommentType = {
  id: number;
  content: string;
  fatherId: number | null;
  createAt: string | Date;
  updateAt: string | Date;
  haveChildren: boolean;
  post: {
    id: number;
    slug: string;
  };
  author: {
    name: string;
    image: string;
  };
};

export type CommentProps = {
  onAnswerPress: (data: { id: number; content: string }) => void;
} & CommentType;

export type ApiReturnComments = {
  page: number;
  take: number;
  data: CommentType[];
  total: number;
};

export type CommentInputProps = {
  postId: number;
  father?: { id: number; content: string } | undefined;
  onNewComment?: (comment: CommentType) => void;
  onNoCommentDad?: () => void;
};

export type ApiReturnNewComment = {
  message: string;
  data: CommentType;
};

export type LoginApiReturn = {
  data: User;
  token: string;
};

export type UserModalProps = {
  onDismiss: () => void;
  navigation: StackNavigationProp<LoggedInScreens>;
};

export type UserServiceUpdateData = {
  name: string | undefined;
  email: string | undefined;
  image: Image | undefined;
};

export type ReturnApiUserUpdate = {
  message: string;
  data: {
    name?: string;
    email?: string;
    image?: string;
  };
};
