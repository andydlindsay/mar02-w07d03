import React from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [count, setCount] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [item, setItem] = React.useState({});
  const [author, setAuthor] = React.useState({});

  // updating the document
  React.useEffect(() => {
    console.log('title has been changed');
    if (count > 10) {
      document.title = `You clicked ${count} times`;
    }
  }, [count]);

  // interval
  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(`The current value of count is ${count}`);
    }, 500);

    const cleanup = () => {
      console.log('running cleanup');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  // data fetching
  React.useEffect(() => {
    axios
      .get(`https://hn.algolia.com/api/v1/items/1`)
      .then(response => {
        console.log(response.data);
        setItem(response.data);
        const { author } = response.data;

        axios
          .get(`https://hn.algolia.com/api/v1/users/${author}`)
          .then(res => {
            const author = res.data;
            setAuthor(author);
          });
      });
  }, []);

  // infinite loop
  // React.useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <div>
      <h3>Inside the UseEffect component</h3>
      <div>
        <h3>Count: {count}</h3>
        <button
          onClick={() => setCount(count + 1)}
        >Don't Press</button>
      </div>

      <div>
        <label htmlFor="search-term">Search Term:</label>
        <input
          id="search-term"
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <h3>{searchTerm}</h3>
      </div>

      <div>
        <h3>Title: {item.title}</h3>
        <h4>By: {author.username}</h4>
        <h4>Bio: {author.about}</h4>
      </div>
    </div>
  );
};

export default UseEffect;
