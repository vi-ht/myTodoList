import * as React from "react";
import TaskModal from "./TaskModal";
import {
  Grid,
  GridItem,
  Button,
  Divider,
  Center,
  Input,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Link,
  IconButton,
  Tooltip,
  Container,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { MdOutlineAdd, MdCheckCircle } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BiLoader, BiCodeAlt, BiBook } from "react-icons/bi";
import { taskList, s } from "../asset/data/DataList";
//----------------------------------------------------------------------------
export default function TodoList() {
  const [data, setData] = React.useState(s);
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={3} width="100%">
        {/* <GridItem colStart={4} colEnd={8} h="10" width="100%">
          <Input placeholder="Basic usage" />
        </GridItem>
        <GridItem colStart={8} colEnd={10} h="10" width="100%">
          <Button
            variant="outline"
            colorScheme="pink"
            width="100%"
            leftIcon={<MdOutlineAdd />}
          >
            Add
          </Button>
        </GridItem> */}
        <GridItem rowStart={2} colStart={2} colEnd={12} h="10">
          <StatGroup
            colorScheme="pink"
            border="1px"
            borderColor="pink.500"
            p={5}
            borderRadius={10}
            mb={5}
          >
            <Stat>
              <StatLabel color="">Done</StatLabel>
              <StatNumber>
                {data && data.filter((task) => task?.state == 1).length}
              </StatNumber>
              <StatHelpText>
                <StatArrow type="increase" />
                {data &&
                  (
                    (data.filter((task) => task?.state == 1).length * 100) /
                    data.length
                  ).toFixed(2)}
                %
              </StatHelpText>
            </Stat>
            <Center height="70px" mt={2}>
              <Divider orientation="vertical" borderColor="pink.500" />
            </Center>
            <Stat>
              <StatLabel>Pending</StatLabel>
              <StatNumber>
                {data && data.filter((task) => task?.state != 1).length}
              </StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                {data &&
                  (
                    (data.filter((task) => task?.state != 1).length * 100) /
                    data.length
                  ).toFixed(2)}
                %
              </StatHelpText>
            </Stat>
            <Center height="70px" mt={2}>
              <Divider orientation="vertical" borderColor="pink.500" />
            </Center>
            <Stat>
              <StatLabel>Total</StatLabel>
              <StatNumber>{data && data.length}</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                100%
              </StatHelpText>
            </Stat>
          </StatGroup>
          <TableContainer>
            <Table variant="simple" colorScheme="blackAlpha" size="sm">
              <Thead>
                <Tr>
                  <Th>Task name</Th>
                  <Th>Type</Th>
                  <Th>Reference link</Th>
                  <Th isNumeric>State</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data &&
                  data.map((task, index) => (
                    <Tr>
                      <Td>{task.title}</Td>
                      <Td>
                        {task.type == 1 ? (
                          <Icon as={BiBook} color="yellow.400" w={5} h={5} />
                        ) : (
                          <Icon as={BiCodeAlt} color="blue.500" w={5} h={5} />
                        )}
                      </Td>
                      <Td>
                        {task.reference && (
                          <Link href={task.reference} isExternal>
                            {task.refName} <ExternalLinkIcon mx="2px" />
                          </Link>
                        )}
                        {!task.reference && "---"}
                      </Td>
                      <Td isNumeric>
                        {task.state == 1 && (
                          <Icon
                            as={IoMdDoneAll}
                            color="green.500"
                            w={5}
                            h={5}
                          />
                        )}
                        {task.state == 2 && (
                          <Icon as={BiLoader} color="red.500" w={5} h={5} />
                        )}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </GridItem>
      </Grid>

      <Container
        position="fixed"
        bottom={4}
        right={7}
        display="flex"
        flexDir="column"
        justifyContent="flex-end"
        width="50px"
        gap={2}
      >
        <Popover placement="top-start">
          <PopoverTrigger>
            <IconButton
              colorScheme="pink"
              aria-label="Call Segun"
              size="lg"
              icon={<Icon as={FiSettings} w={6} h={6} />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              Popover placement
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </PopoverBody>
          </PopoverContent>
        </Popover>
        
        <TaskModal data={data} setData={setData}/>
      </Container>
    </>
  );
}
