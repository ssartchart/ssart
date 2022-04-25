
## 201팀 오픈소스 프로젝트 
### 1. html에서 js import하기

```html
<script>
	import { test } from "./src/index.js"
    ....
</script>
```

로 import하면 에러발생

```html
<script type="module">
	import { test } from "./src/index.js"
    ....
</script>
```

로 해결

만약 안되면 package.json에 

```json
{
    ......,
	"type": "module"
}
```

추가하기

---

### 2. html 파일을 실행하여 진행시

CORS 에러 발생

-> http 상에서 실행해야한다.

`npx http-server`

---

### 3. 로컬에서 코드 및 파일 수정이 적용이 안될 경우

`npx http-server -a localhost -p 8000 -c-1`

`-c-1`로 캐시를 없애야한다.

근데 `a localhost -p 8000`이 없으면 동작하지 않는다.

