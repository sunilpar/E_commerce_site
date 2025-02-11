import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index.js";
import service from "../../backend/config.js";

export default function ProductForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Title: "",
      CoverImage: "",
      Description: "",
      Pdf: 0,
      Audio: 0,
      Tags: "",
    },
  });
  const submit = async (data) => {
    console.log(data, "data from form");
    data.Pdf = parseFloat(data.Pdf);
    data.Audio = parseFloat(data.Audio);
    const dbPost = await service.createProduct({ ...data });
    console.log(dbPost, "return from created product");

    if (dbPost) {
      console.log("Product created successfully");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap text-iphone-white"
    >
      <div className="w-2/3 px-2 ">
        <Input
          label="Title"
          placeholder="Title of book"
          className="mb-4 "
          {...register("Title", { required: true })}
        />

        <Input
          label="Description of the book :"
          placeholder="Description of book"
          type="textarea"
          className="mb-4 w-[500px] h-[500px] textarea-autosize  "
          {...register("Description", { required: true })}
        />
        <Input
          label="Tags"
          placeholder="tags of book"
          className="mb-4"
          {...register("Tags", { required: true })}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="cover Image :"
          type="text"
          className="mb-4"
          {...register("CoverImage", { required: true })}
        />
        <Input
          label="Pdf price:"
          type="number"
          className="mb-4"
          {...register("Pdf", { required: true })}
        />
        <Input
          label="Audio price:"
          type="number"
          className="mb-4"
          {...register("Audio")}
        />
        <Button type="submit" className="w-full">
          submit
        </Button>
      </div>
    </form>
  );
}
