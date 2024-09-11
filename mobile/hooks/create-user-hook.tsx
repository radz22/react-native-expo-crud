import React, { useEffect, useState } from "react";
import { type createuser } from "@/types/create-usert";
import { createUserData } from "@/data/create-user";
import { router } from "expo-router";

export const CreateUser = () => {
  const handleCreate = async (userdata: createuser) => {
    try {
      await createUserData(userdata);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return { handleCreate };
};
