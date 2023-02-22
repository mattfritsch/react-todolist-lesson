import store from "./store";
import TodoListRedux from "./TodoListRedux";
import {Provider} from "react-redux";

export default () => {
    return (
      <Provider store={store}>
          <TodoListRedux />
      </Provider>
    );
};