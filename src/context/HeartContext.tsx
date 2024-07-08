// src/contexts/LikeContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LikedItem } from "./types";
import { datas } from "../components/Data"; // Import datas here

interface LikeContextType {
  likedItems: LikedItem[];
  toggleLike: (productName: string) => void;
}

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export const LikeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [likedItems, setLikedItems] = useState<LikedItem[]>([]);

  const toggleLike = (productName: string) => {
    setLikedItems((prevLikedItems) => {
      const itemIndex = prevLikedItems.findIndex(
        (item) => item.name === productName
      );

      if (itemIndex !== -1) {
        // Item already exists, toggle liked status
        const updatedItems = [...prevLikedItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          liked: !updatedItems[itemIndex].liked,
        };

        // If unliking, remove from likedItems
        if (!updatedItems[itemIndex].liked) {
          updatedItems.splice(itemIndex, 1);
        }

        return updatedItems;
      } else {
        // Item does not exist, add with liked status true
        const product = datas.find((data) => data.name === productName);
        if (product) {
          const newLikedItem: LikedItem = { ...product, liked: true };
          return [...prevLikedItems, newLikedItem];
        }
      }

      return prevLikedItems;
    });
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike must be used within a LikeProvider");
  }
  return context;
};
