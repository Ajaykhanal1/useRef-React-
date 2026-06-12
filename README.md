Here are **10 common `useRef` DOM manipulation examples** in React TSX.

## 1. Focus an Input

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<button onClick={() => inputRef.current?.focus()}>
  Focus Input
</button>

<input ref={inputRef} />
```

---

## 2. Change Button Color

```tsx
const btnRef = useRef<HTMLButtonElement>(null);

<button
  ref={btnRef}
  onClick={() => {
    if (btnRef.current) {
      btnRef.current.style.backgroundColor = "red";
    }
  }}
>
  Click Me
</button>
```

---

## 3. Change Text

```tsx
const textRef = useRef<HTMLHeadingElement>(null);

<h1 ref={textRef}>Hello</h1>

<button
  onClick={() => {
    if (textRef.current) {
      textRef.current.textContent = "Welcome";
    }
  }}
>
  Change Text
</button>
```

---

## 4. Hide Element

```tsx
const divRef = useRef<HTMLDivElement>(null);

<div ref={divRef}>Hide Me</div>

<button
  onClick={() => {
    if (divRef.current) {
      divRef.current.style.display = "none";
    }
  }}
>
  Hide
</button>
```

---

## 5. Show Element

```tsx
const divRef = useRef<HTMLDivElement>(null);

<button
  onClick={() => {
    if (divRef.current) {
      divRef.current.style.display = "block";
    }
  }}
>
  Show
</button>

<div ref={divRef}>Hello</div>
```

---

## 6. Change Font Size

```tsx
const textRef = useRef<HTMLParagraphElement>(null);

<p ref={textRef}>React</p>

<button
  onClick={() => {
    if (textRef.current) {
      textRef.current.style.fontSize = "40px";
    }
  }}
>
  Increase Size
</button>
```

---

## 7. Read Input Value

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<button
  onClick={() => {
    console.log(inputRef.current?.value);
  }}
>
  Get Value
</button>

<input ref={inputRef} />
```

---

## 8. Clear Input

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<button
  onClick={() => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }}
>
  Clear
</button>

<input ref={inputRef} />
```

---

## 9. Scroll to Element

```tsx
const sectionRef = useRef<HTMLDivElement>(null);

<button onClick={() => sectionRef.current?.scrollIntoView()}>
  Scroll
</button>

<div style={{ height: "1000px" }}></div>

<div ref={sectionRef}>Target Section</div>
```

---

## 10. Play Video

```tsx
const videoRef = useRef<HTMLVideoElement>(null);

<button onClick={() => videoRef.current?.play()}>
  Play
</button>

<video ref={videoRef} width="300">
  <source src="video.mp4" />
</video>
```

## Most Important `useRef` DOM Operations for Jobs

1. Focus input
2. Read input value
3. Clear input
4. Scroll to element
5. Change styles
6. Play/Pause video
7. Measure element width/height
8. Auto-focus forms
9. Control modals
10. Integrate third-party libraries (charts, maps, editors)

These are the `useRef` DOM patterns you'll see most often in real React projects.
