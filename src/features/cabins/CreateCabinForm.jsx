import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form.jsx";
import Button from "../../ui/Button.jsx";
import FileInput from "../../ui/FileInput.jsx";
import Textarea from "../../ui/Textarea.jsx";
import { createCabin } from "../../services/apiCabins.js";
import FormRow from "../../ui/FormRow.jsx";

function CreateCabinForm() {
    const queryClient = useQueryClient();

    const { register, handleSubmit, reset, getValues, formState } = useForm();
    const { errors } = formState;

    const { mutate, isPending: isCreating } = useMutation({
        mutationFn: createCabin,
        onSuccess: () => {
            toast.success("New cabin successfully created");
            queryClient.invalidateQueries({ queryKey: ["cabin"] });
            reset();
        },
        onError: (err) => toast.error(err.message)
    });

    const onSubmit = (data) => {
        mutate(data);
    }

    const onError = (error) => {
        // console.log(error);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormRow label={"Cabin name"} error={errors?.name?.message}>
                <Input type="text" id="name" {...register("name", {
                    required: "This field is required"
                })} disabled={isCreating} />
            </FormRow>

            <FormRow label={"Maximum capacity"} error={errors?.maxCapacity?.message}>
                <Input type="number" id="maxCapacity" {...register("maxCapacity", {
                    required: "This field is required",
                    min: {
                        value: 1,
                        message: "Capacity should be at least 1"
                    }
                })} disabled={isCreating} />
            </FormRow>

            <FormRow label={"Regular price"} error={errors?.regularPrice?.message}>
                <Input type="number" id="regularPrice" {...register("regularPrice", {
                    required: "This field is required"
                })} />
            </FormRow>

            <FormRow label={"Discount"} error={errors?.discount?.message}>
                <Input type="number" id="discount" defaultValue={0} {...register("discount", {
                    required: "This field is required",
                    validate: (value) => {
                        return value <= getValues().regularPrice || "Discount should be less than the regular price"
                    }
                })} disabled={isCreating} />
            </FormRow>

            <FormRow label={"Description for the cabin"} error={errors?.description?.message}>
                <Textarea type="number" id="description" defaultValue="" {...register("description", {
                    required: "This field is required"
                })} disabled={isCreating} />
            </FormRow>

            <FormRow label={"Cabin photo"}>
                <FileInput id="image" accept="image/*" disabled={isCreating} />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button disabled={isCreating}>Add cabin</Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
