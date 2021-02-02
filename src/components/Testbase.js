import Localbase from "localbase"

const Testbase = () => {


let myDatabase = new Localbase('myDatabase')

    const insertIntoDb = () => {
        myDatabase.collection('users').add({
            id: 2,
            name: 'Joe',
            age: 58
          })
    }

    const removeTable = () => {
        myDatabase.delete()
    }

    return ( 
        <>
            <button onClick={insertIntoDb()}>adduser</button>
            <button onClick={removeTable()}>delete table</button>
        </>
     );
}
 
export default Testbase;