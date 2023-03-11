import * as React from "react";
//icon lib
import { MdOutlineAdd } from "react-icons/md";
import { TiFlowChildren } from "react-icons/ti";
import { BiLoader, BiCodeAlt, BiBook } from "react-icons/bi";
//charkaUI component
import { useToast, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  Button,
  Input,
  Icon,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Divider,
  Select,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Grid,
  GridItem,
  Checkbox,
  Tooltip,
  CloseButton,
  Text,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { setTaskList } from "../asset/data/DataList";
const ChildInput = ({ child, func, control, errors, addContentFunc }) => (
  <>
    <InputGroup mt={child.id == 1 ? 0 : 3}>
      <InputLeftAddon children={child.id} bg="pink.500" color="white" />
      <Controller
        name={`child${child.id}`}
        control={control}
        rules={{
          required: `child${child.id} is required`,
          maxLength: {
            value: 250,
            message: `Length of child ${child.id} must be less than 250`,
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            placeholder={`Child task ${child.id}`}
            focusBorderColor="pink.500"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            ref={field.ref}
            isInvalid={fieldState.error}
            errorBorderColor="crimson"
          />
        )}
      />
      <InputRightElement
        children={<CloseButton size="sm" onClick={() => func(child.id)} />}
      />
    </InputGroup>
    <Text fontSize="xs" color="red" mt={1}>
      {errors[`child${child.id}`]?.message}
    </Text>
  </>
);
export default function TaskModal({ data, setData }) {
  const [childList, setChildList] = React.useState([]);
  const [newTask, setNewTask] = React.useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      type: "none",
      refLink: "",
      refName: "",
      child1: "",
      child2: "",
      child3: "",
      child4: "",
      child5: "",
    },
  });
  React.useEffect(() => {
    setTaskList(newTask)
    // setData([...data, newTask]);
  }, [newTask]);
  const onSubmit = (value) => {
    console.log(value);
    setNewTask({
      title: value.title,
      reference: value.refLink === "" ? null : value.refLink,
      refName: value.refLink === "" ? null : value.refName,
      state: 2,
      type: value.type,
    });
    toast({
      title: "Task is created.",
      description: "We've successfully created your task for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom-left",
    });
    onClose();
    reset({
      title: "",
      type: "none",
    });
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const AddNewChild = () => {
    if (childList.length <= 4) {
      let newChild = [...childList];
      let id = ++childList.length;
      newChild.push({ id: id });
      setChildList(newChild);
    } else {
      toast({
        title: "Max task range",
        description: "the number of subtasks should not be more than 5",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const RemoveChildById = (id) => {
    let newChild = [];
    let newId = 1;
    for (let child of childList) {
      if (child.id != id) {
        newChild.push({ id: newId });
        setValue(`child${newId}`, watch(`child${child.id}`));
        newId++;
      } else {
        setValue(`child${id}`, "");
      }
    }
    setChildList(newChild);
  };
  const SetContentOfChildById = (id, value) => {
    let newChild = [];
    for (let child of childList) {
      child.id === id
        ? newChild.push({ ...child, content: value })
        : newChild.push(child);
    }
    setChildList(newChild);
  };
  return (
    <>
      <Tooltip
        label="Create new task"
        placement="left"
        bg="pink.400"
        borderRadius="10"
      >
        <IconButton
          onClick={onOpen}
          variant="outline"
          colorScheme="pink"
          aria-label="Call Segun"
          size="lg"
          icon={<Icon as={MdOutlineAdd} w={6} h={6} />}
        />
      </Tooltip>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setChildList([]);
          reset({
            title: "",
            type: "none",
            refLink: "",
            refName: "",
            child1: "",
            child2: "",
            child3: "",
            child4: "",
            child5: "",
          });
        }}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new task</ModalHeader>
          <Divider mt={-1} />
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6} overflowX="hidden" h="360px" overflowY="scroll">
              <FormControl mt={3}>
                <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                  <GridItem colSpan={5}>
                    <FormControl>
                      <FormLabel>
                        Task title{" "}
                        <sup style={{ color: "#d53f8c", fontSize: "14px" }}>
                          *
                        </sup>
                      </FormLabel>
                      <Controller
                        name="title"
                        control={control}
                        rules={{
                          required: "Title is required",
                          maxLength: {
                            value: 250,
                            message: "Length of title must be less than 250",
                          },
                        }}
                        render={({ field, fieldState }) => (
                          <Input
                            ref={field.ref}
                            onBlur={field.onBlur}
                            onChange={field.onChange}
                            value={field.value}
                            isInvalid={fieldState.error}
                            errorBorderColor="crimson"
                            placeholder="Title of your task"
                            focusBorderColor="pink.500"
                          />
                        )}
                      />
                      <Text fontSize="xs" color="red" mt={1}>
                        {errors.title?.message}
                      </Text>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel color="white">ff</FormLabel>
                      <IconButton
                        onClick={AddNewChild}
                        variant="outline"
                        colorScheme="pink"
                        aria-label="Call Segun"
                        size="md"
                        w="100%"
                        border="2px"
                        icon={<Icon as={TiFlowChildren} w={6} h={6} />}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={6}>
                    {childList &&
                      childList.map((child, index) => (
                        <ChildInput
                          key={index}
                          child={child}
                          func={RemoveChildById}
                          control={control}
                          errors={errors}
                          addContentFunc={SetContentOfChildById}
                        />
                      ))}
                  </GridItem>
                  <GridItem colSpan={4}>
                    <FormControl>
                      <FormLabel>Reference link</FormLabel>
                      <Input
                        name="refLink"
                        placeholder="Link of reference"
                        focusBorderColor="pink.500"
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormLabel>Reference name</FormLabel>
                    <Input
                      name="refName"
                      placeholder="Name of reference"
                      focusBorderColor="pink.500"
                    />
                  </GridItem>
                  <GridItem colSpan={5}>
                    <Checkbox colorScheme="pink" color="gray.500">
                      Add preference link to bookmarks list
                    </Checkbox>
                  </GridItem>
                </Grid>
              </FormControl>
              <FormControl mt={3}>
                <FormLabel>
                  Type{" "}
                  <sup style={{ color: "#d53f8c", fontSize: "14px" }}>*</sup>
                </FormLabel>
                <Controller
                  name="type"
                  rules={{ required: "Type is required" }}
                  control={control}
                  render={({ field, fieldState }) => (
                    <Select
                      ref={field.ref}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      value={field.value}
                      isInvalid={fieldState.error}
                      errorBorderColor="crimson"
                      focusBorderColor="pink.500"
                      placeholder="Select type of task"
                    >
                      <option value="1">Learn</option>
                      <option value="2">Code</option>
                    </Select>
                  )}
                />
                <Text fontSize="xs" color="red" mt={1}>
                  {errors.type?.message}
                </Text>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="pink" mr={3} type="submit">
                Save
              </Button>
              <Button
                onClick={() =>
                  reset({
                    title: "",
                    type: "none",
                    refLink: "",
                    refName: "",
                    child1: "",
                    child2: "",
                    child3: "",
                    child4: "",
                    child5: "",
                  })
                }
              >
                Reset
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
