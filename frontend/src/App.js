import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';

function App() {

  // создаем state. По умолчанию null. Это будут данные

  const [data,setData]=useState(null)

  // теперь вызываем хук useEffect который будет зависеть от пустого массива.
  //  Чтобы он вызвался один раз при инициализации нашего приложения. 
  // Делаем запрос с нашему api и далее этот запрос обрабатываем.

  useEffect(()=>{
    fetch('/api')
    // получаем некий response и к респонсу применяем метод json
    .then(response=>response.json())
  // далее тоже получаем некий response и этот ремпонс нужно закинуть внутрь нашего стэйта
  // message- потому что у нас поле message в index.js
  .then(response=>setData(response.message))

  // и далее выводим эти данные в верстке  !data? "loading" : data
  // если у нас в data ничего нет, данные не подгрузились, тогда мы пишем loading. 
  // в противном случае возвращаем data

  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {
           !data ? "loading..." : data

          }
      
        </p>
 
      </header>
    </div>
  );
}

export default App;
