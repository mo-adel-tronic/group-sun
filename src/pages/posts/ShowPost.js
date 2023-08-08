import React from 'react'
import {useParams} from "react-router-dom";

export default function ShowPost() {
  const {id} = useParams();
  return (
    <div>ShowPost {id}</div>
  )
}
