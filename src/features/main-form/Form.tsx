import styles from './Form.module.css';

export function MainForm() {


  return (
      <div className={styles.form}>
          <form> 
            <label> Observations</label>
            <textarea>
                THIS WILL BE TEXT AREA
            </textarea>
            <label>
                Consumabales
            </label>
            <div className={styles.consumables}>
                <button>option 1</button>
                <button>option 2</button>
                <button>option 3</button>
                <button>option 4</button>
                <button>option 5</button>
                <button>option 6</button>
            </div>


            <div>
                <h2>intervention codes</h2>
                <div>
                     <label>a</label>
                <input type='radio'/>
                <label>a</label>
                <input type='radio'/> <label>b</label>
                <input type='radio'/> <label>c</label>
                <input type='radio'/> <label>d</label>
                <input type='radio'/> <label>e</label>
                <input type='radio'/>
                </div>
               
            </div>
          </form>
      </div>
  );
}
