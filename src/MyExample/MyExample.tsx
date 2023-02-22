import {Provider, useDispatch, useSelector} from "react-redux";
import {Input, Select} from "antd";
import store from "./store";
import {setName, setSelect} from "./MyExampleSlice";

export default () => {
    return (
        <Provider store={store}>
            <Level0 />
            <Display />
        </Provider>
    );
};

const Display = () => {
    const name = useSelector((state: any) => state.myExample.name)
    const select = useSelector((state: any) => state.myExample.select)
    return <div>{name}, {select}</div>
}

const Level0 = () => {
    return (
        <>
            <Level1 />
            <Level2 />
        </>
    )
}

const Level1 = () => {
    const dispatch = useDispatch();
    const name = useSelector((state:any) => state.myExample.name);

    const handleOnChange =(e: any) => {
        dispatch(setName(e.target.value))
    }

    return <Input
        value={name}
        onChange={handleOnChange}
    />
}

const Level2 = () => {
    const dispatch = useDispatch();
    const select = useSelector((state: any) => state.myExample.select);

    const handleOnChange = (value: string) => {
        dispatch(setSelect(value))
    }
    return (
        <Select
            value={select}
            onChange={handleOnChange}
            options={[{value: 'blue' , label: 'blue'}, {value: 'dabedi', label: 'dabedi'},
                {value: 'dabeda', label: 'dabeda'}]}
        />
    )
}