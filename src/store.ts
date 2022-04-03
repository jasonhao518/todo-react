import { getYjsValue, syncedStore } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

export type Todo = {
  title: string;
  count: number;
  completed: boolean;
};

export const globalStore = syncedStore({ todos: [] as Todo[] });
new WebrtcProvider("instore", getYjsValue(globalStore) as any); // sync via webrtc
