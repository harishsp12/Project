import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {addNum, subNum, mulNum, divNum, remNum, modularNum} from "./Redux/action";

const ProductList = () => {
    const dispatch = useDispatch();
    const addResult = useSelector((state) => state.add.result);
    const subResult = useSelector((state) => state.sub.result);
    const mulResult = useSelector((state) => state.mul.result);
    const divResult = useSelector((state) => state.div.result);
    const remResult = useSelector((state) => state.rem.result);
    const modResult = useSelector((state) => state.mod.result);



  return (
    <div>

        <h3>Add result : {addResult}</h3>
        <button onClick={() => dispatch(addNum(5))}>Add 5</button>

         <h3>Sub result : {subResult}</h3>
        <button onClick={() => dispatch(subNum(3))}>Sub 3</button>

         <h3>Mul result : {mulResult}</h3>
        <button onClick={() => dispatch(mulNum(5))}>multiple 5</button>

         <h3>Div result : {divResult}</h3>
        <button onClick={() => dispatch(divNum(5))}>division 5</button>

         <h3>Rem result : {remResult}</h3>
        <button onClick={() => dispatch(remNum(5))}>Rementer 5</button>

         <h3>Mod result : {modResult}</h3>
        <button onClick={() => dispatch(modularNum(5))}>Moduler 5</button>

    </div>
  )
}

export default ProductList