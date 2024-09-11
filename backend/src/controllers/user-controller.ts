import { Request, Response, NextFunction } from "express";
import { userDataModal } from "../db/user-schema";
export const UserCreate = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, age, work } = req.body;

    const createUserData = await userDataModal.create({
      firstname,
      lastname,
      age,
      work,
    });
    if (!createUserData) {
      return res.status(400).send({ error: "not created" });
    }

    return res.status(200).send(createUserData);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const GetAllUserData = async (req: Request, res: Response) => {
  try {
    const findAll = await userDataModal.find({});

    return res.status(200).send(findAll);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const GetUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const findById = await userDataModal.findById({ _id: id });
    if (!findById) {
      return res.status(401).send({ error: "not found" });
    }

    return res.status(200).send(findById);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, age, work } = req.body;

    const findAndUpdate = await userDataModal.findByIdAndUpdate(
      { _id: id },
      { firstname: firstname, lastname: lastname, age: age, work: work }
    );
    if (!findAndUpdate) {
      return res.status(401).send({ error: "not found" });
    }

    return res.status(200).send({ msg: "update" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteUser = await userDataModal.findByIdAndDelete({ _id: id });
    if (!deleteUser) {
      return res.status(401).send({ error: "not deleted" });
    }

    return res.status(200).send({ msg: "deleted" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};
