import React, { memo, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { BaseHeaderLayout, ContentLayout } from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Illo } from "../../components/Illo";
import { Button } from "@strapi/design-system/Button";
import Plus from "@strapi/icons/Plus";
import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system/Table';
import TodoModel from "../../components/TodoModel";
import TodoCount from "../../components/TodoCount";
import TodoTable from "../../components/TodoTable";
import todoRequests from "../../api/todo"
import { Typography } from '@strapi/design-system/Typography';
import { Flex } from '@strapi/design-system/Flex';
import { IconButton } from '@strapi/design-system/IconButton';
import Pencil from '@strapi/icons/Pencil';
import { Box } from '@strapi/design-system/Box';
import Trash from '@strapi/icons/Trash';

// import PropTypes from 'prop-types';

const HomePage = () => {
  const [todoData, setTodoData] = React.useState([]);
  // const [showModal, setShowModal] = useState(false);

  const [ModalVisible, SetModalVisible] = useState(false);
  const [isEdit, setIsEdit] = React.useState(false)
  const [editedVal, setEditedVal] = React.useState({})
  const fetchData = async () => {
    const todo = await todoRequests.getAllTodos();

    setTodoData(todo);
  };

  async function addTodo(data) {
    await todoRequests.addTodo({ "name": data.name, "isDone": data.isDone });
    fetchData();
  }

  async function toggleTodo(data) {
    await todoRequests.toggleTodo(data.id);
  }

  async function deleteTodo(data) {
    await todoRequests.deleteTodo(data.id);
    await fetchData();
  }

  async function editTodo(id, data) {
    await todoRequests.editTodo(id, data);
    await fetchData();
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <BaseHeaderLayout
        title="Todo Plugin"
        subtitle="All your todos in one place."
        as="h2"
      />

      <ContentLayout>
        {todoData.length === 0 ? (
          <EmptyStateLayout
            icon={<Illo />}
            content="You don't have any todos yet..."
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Add your first todo
              </Button>
            }
          />
        ) : (
          <>
            <TodoCount count={todoData.length} />

            <Table>
              <Thead>
                <Tr>
                  <Th>
                    <Typography variant="sigma">ID</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Task</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">isDone</Typography>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {todoData.map((k) => {
                  return (
                    <Tr>
                      <Td>
                        <Typography textColor="neutral800">{k.id}</Typography>
                      </Td>
                      <Td>
                        <Typography textColor="neutral800">{k.name}</Typography>
                      </Td>
                      <Td>
                        <Typography textColor="neutral800">{JSON.stringify(k.isDone)}</Typography>
                      </Td>
                      <Flex>
                        <IconButton onClick={() => {
                          setEditedVal({
                            id: k.id,
                            isDone: k.isDone,
                            name: k.name
                          })
                          setIsEdit(true)
                        }} label="Edit" noBorder icon={<Pencil />} />
                        <Box paddingLeft={1}>
                          <IconButton onClick={() => deleteTodo(k.id)} label="Delete" noBorder icon={<Trash />} />
                        </Box>
                      </Flex>
                    </Tr>
                  )
                }
                )}
              </Tbody>
            </Table>
          </>
        )}
      </ContentLayout>

      {ModalVisible && <TodoModel SetModalVisible={SetModalVisible} addTodo={addTodo} />}
    </>
  );
};

export default memo(HomePage);