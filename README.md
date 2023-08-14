## yoo-design-system

### 설계구조

- Container, Layout, Wrapper, Contents 로 구성
- Container 는 모듈의 시작을 알리는 부분으로 position : relative, fixed, sticky 중 하나이다.
- Layout 은 flex, gird 로 작성
- Wrapper 는 Contents 를 위한 height, width, margin, border, padding 을 담당
- Contents 는 실제 기능을 하는 태그로 구성(p, span, button, img, div 등)하며 항상 full-width, full-height 를 가진다.
- Wrapper 와 Layout 의 구성 순서는 상관없음(Wrapper > Layout > Layout > Wrapper, Layout > Wrapper > Wrapper 등)
- Contents 는 항상 Wrapper 의 자식에 위치해야 한다.