import React, { useRef, useState } from 'react'

function TodoList() {

  // useRef // 
  const input = useRef()

  // state variable //
  const [list,setList]=useState([])
   
  // btn function  //
  
  function click(e){
    e.preventDefault()
    setList([...list,input.current.value])
  }
 
  function deleteBtn(e,index){
    e.preventDefault()   
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  
  function editBtn(e, index) {
    e.preventDefault();
    const editedItem = prompt("Edit item", list[index]);
    if (editedItem !== null && editedItem !== "") {
      const newList = [...list];
      newList[index] = editedItem;
      setList(newList);
    }
  }
  
  function toggleStrikeThrough(index) {
    const newList = [...list];
    newList[index] = <del>{list[index]}</del>;
    setList(newList);
  }

  return (
    <>
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10" >
              <div className="card" id='inbox' style={{borderRadius : '15px'}}>
                <div className="card-body p-5"  >
                  <h1 className="mb-4 text-center text-info" id='font'> Todo List</h1>
                  <form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill">
                      <input ref={input} type="text" id="form3" className="form-control form-control-lg text-light" placeholder='Add your new todo' />
                      <label className="form-label text-light mt-2" htmlFor="form3">What do you need to do today?</label>
                    </div>
                    <button onClick={click} type="submit" className="btn btn-warning btn-lg ms-2" id='btn'>Add</button>
                  </form>
                  <ul className="list-group mb-0" >
                    {list.map((item,index)=>{
                      return(
                        <li id='inbox' className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                          <div className="d-flex align-items-center text-light">
                            <input onClick={() => toggleStrikeThrough(index)} type="checkbox" className="form-check-input me-2"/>
                            {item}
                          </div>
                          <div className="d-flex align-items-center">
                            <button onClick={(e)=>editBtn(e,index)} className="btn btn-info me-2">Edit</button>
                            <button onClick={(e)=>deleteBtn(e,index)} className="btn btn-danger me-2">Delete</button>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TodoList
