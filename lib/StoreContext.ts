"use client";
import { createContext, useContext, type Context } from "react";
//
import { type StoreMenu } from "@lib/Interface";

// Store Context
const StoreContext: Context<StoreMenu> = createContext<StoreMenu>({ subject: "", price: 0, sort: 0 });

// Store Context Hook
function useStoreContext(): StoreMenu
{
  return useContext(StoreContext);
}

export default StoreContext;
export { useStoreContext };