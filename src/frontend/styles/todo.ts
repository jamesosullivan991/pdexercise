import styled from 'styled-components';

const Container = styled.div`
  max-width: 32rem; /* equivalent to max-w-lg */
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem; /* equivalent to py-4 */
  padding-bottom: 1rem;
  padding-left: 0.5rem; /* equivalent to px-2 */
  padding-right: 0.5rem;
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-left: 1rem; /* equivalent to px-4 */
  padding-right: 1rem;
  padding-top: 0.5rem; /* equivalent to py-2 */
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0; /* border-gray-200 */
`;

const Button = styled.button`
  color: white;
  background-color: #4299e1; /* bg-blue-500 */
  &:hover {
    background-color: #2b6cb0; /* hover:bg-blue-700 */
  }
  font-weight: 500; /* font-medium */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  border-radius: 0.25rem; /* rounded */
`;

const Input = styled.input`
  border: 1px solid #e2e8f0; /* border */
  border-radius: 0.25rem; /* rounded */
  padding-top: 0.5rem; /* py-2 */
  padding-bottom: 0.5rem;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
  width: 100%; /* block w-full */
  margin-bottom: 1rem; /* mb-4 */
`;

export { Container, TodoList, TodoItem, Button, Input };
