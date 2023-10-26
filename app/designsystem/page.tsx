const DesignSystemPage = () => {

    //rather than copy pasting the same elements and have them 
    //contain the same classes, you creat design systems/... look at global.css
  return (
    <div>
      <h1>This is a title</h1>
      <h2 className="mb-1 text-xl font-bold">This is a subtitle</h2>
      <p>This is a paragraph</p>
      <a>This is an anchor</a>
      <div>
        <button>This is a button</button>
      </div>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checbox">Checkbox</label>
      </div>
      <div>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
        <h1>This is a title</h1>
        <h2 className="mb-1 text-xl font-bold">This is a subtitle</h2>
      </div>
    </div>
  );
};

export default DesignSystemPage;
