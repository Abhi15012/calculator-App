import styles from './App.module.css'
import './App.css'
import  Calbut from './components/cal-buttons'
import ArrData from './store/datastore';

function App(){
   const AbhiArr=["C", "1",'2','+','3','4','-','5','6',"*",'7','8',"/","=", '9','0','.']
return<>
<center>
 <h1>Calculator App</h1>
 <div class={styles.calculator}>
<input class={styles.display} type="text" />
<ArrData.Provider  value={AbhiArr} >
<Calbut></Calbut>
</ArrData.Provider>
 </div>
</center>

</>

}

export default App;