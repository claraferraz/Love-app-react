# Love-app-react

A ReactJS app with a runaway button. This is also my first ReactJS app, so it's quite simple.

## Runaway Button

The function I used to make the button runaway when hovered was:

```js

    const onHoverHandler = (e) => {
        e.target.style.left =`${Math.ceil(Math.random() * 90)}% `;
        e.target.style.top = `${Math.ceil(Math.random() \* 90)}% `;
        e.target.style.transition = "50ms";
    };

```

and the button HTML inside the App() function looks like this:

```HTML
    <button onMouseEnter={onHoverHandler} className="btn no">
        No
    </button>
```
