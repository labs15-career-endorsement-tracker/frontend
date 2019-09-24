import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPinnedStudents } from "../../../actions"
import {PinnedStudentCard} from "../../lib"
import "./index.scss"

const MyStudents = () => {
    const pinnedStudents = useSelector(state => state.studentReducer.pinnedStudents)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPinnedStudents())
    }, [dispatch])
    return (
        <section className="my-pinned-students">
            {pinnedStudents.map(student => <PinnedStudentCard student={student} key={student.id}/>)}
        </section>
    )
}

export default MyStudents