import Localbase from "localbase"

const Testbase = () => {


let myDatabase2 = new Localbase('myDatabase2')

    const insertIntoDb = () => {
        myDatabase2.collection('userss').add({
            id: 2,
            name: 'Joe',
            age: 58
          })    
    }

    const removeTable = () => {
        myDatabase2.delete()
    }

    return ( 
        <>
            <button onClick={insertIntoDb}>adduser</button>
            <button onClick={removeTable}>delete table</button>
        </>
     );
}
 
export default Testbase;