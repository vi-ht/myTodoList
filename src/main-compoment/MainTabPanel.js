import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import TodoList from "./TodoList"
export default function MainTabPanel() {
  return (
    <Tabs variant="line" align="center" colorScheme="pink" isLazy="true" >
      <TabList>
        <Tab>My todo list</Tab>
        <Tab>Bookmarks</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
            <TodoList/>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
