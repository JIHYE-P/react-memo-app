import { useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import './App.scss';
import Main from './pages/Main';
import Form from './pages/Form';

let currentId = 0;
const initial = {id: currentId, title: '', content: ''};
const setLocalStorage = (value) => localStorage.setItem('node', JSON.stringify(value));
const getLocalStorage = () => JSON.parse(localStorage.getItem('node'));

function App() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState(initial);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = getLocalStorage();
    if(getItems && getItems.length) {
      getItems.sort(function (a, b) {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
      setItems(getItems);      
      currentId = getItems[getItems.length-1].id;
    }else{
      currentId = 0;
    }
  }, []);
 
  const validCheck = target => Object.values(target).filter(value => value === '');
  const findItem = id => items.find(item => item.id === id);
  const changeValue = item => {
    if(item.id === value.id){
      item.title = value.title;
      item.content = value.content;
    }
    return item;
  };
  const onChange = ({target}) => setValue(val => Object.assign({...val, [target.name]: target.value}));
  const onInsert = (id) => {
    const isValid = validCheck(value);
    if(isValid.length) return;
    const selected = findItem(id);
    if(selected){
      setValue({...value, ...selected});
      setItems(item => item.map(changeValue));
      setLocalStorage(items.map(changeValue));
    }else{
      currentId++;
      value.id = currentId;
      setValue({...value, title: '', content: ''});
      setItems(item => item.concat({...value}));
      setLocalStorage([value, ...items]);
    }
    history.push('/');
  }
  const onDelete = (id) => {  
    const selected = findItem(id);
    const includes = items.filter(item => item.id !== selected.id);
    setItems([...includes]);
    setLocalStorage([...includes]);
  }
  const onFiltering = ({target}) => {
    const clone = [...items];
    const result = clone.filter(item => item.title.toLotopbe().includes(target.value));
    console.log(result, items);               
  }
  
  return <main className='flex flex-col flex-wrap items-center justify-center w-full h-full'>
    <section className="w-96">
      <h1 className="font-mono text-2xl text-gray-700 text-center mb-5">Memo app</h1>
      <Route path='/' exact>
        <Main items={items} data={initial} onDelete={onDelete} />
      </Route>
      <Route path='/insert' location={location}>
        <Form data={value} setData={setValue} onChange={onChange} onInsert={onInsert} />
      </Route>
    </section>
  </main>
}

export default App;
