import React from "react"
import {useDispatch} from "react-redux"
import {toggleMenu} from "../../../actions"

import Burger from '@animated-burgers/burger-rotate';

import '@animated-burgers/burger-rotate/dist/styles.css' 

const MenuBurger = ({isOpen}) => {
    const dispatch = useDispatch()
    console.log(isOpen)
    return <Burger isOpen={isOpen} onClick={() => {
        dispatch(toggleMenu(!isOpen))
      }}/>
}

export default MenuBurger