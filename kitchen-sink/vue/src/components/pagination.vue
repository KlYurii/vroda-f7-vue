<template>
  <div class="p-container">
    <ul class="p-list">
      <li class="p-item p-pn p-prev p-disabled">
        <f7-link class="p-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_108)">
              <path
                d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
                fill="black"
                fill-opacity="1"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_108">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </f7-link>
      </li>
      <li class="p-item p-active">
        <f7-link class="p-link">1</f7-link>
      </li>
      <li class="p-item">
        <f7-link class="p-link">2</f7-link>
      </li>
      <li class="p-item">
        <f7-link class="p-link">3</f7-link>
      </li>
      <li class="p-item">
        <span class="p-dots">...</span>
      </li>
      <li class="p-item">
        <f7-link class="p-link">7</f7-link>
      </li>
      <li class="p-item p-pn p-next">
        <f7-link class="p-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1_122)">
              <path d="M10 6L8.59003 7.41L13.17 12L8.59003 16.59L10 18L16 12L10 6Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_1_122">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </f7-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.p-container {
  padding: 32px 0;
}

.p-list {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  list-style-image: none;
  list-style-type: none;
  padding: 0;
}

.p-item {
  padding: 0;
  margin: 0 2px;
}

.p-link {
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Black-100, #000);
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
}

.p-dots {
  display: block;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Black-100, #000);
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
}

.p-active {
  border-radius: 8px;
  background: var(--Black-5-bg, rgba(0, 0, 0, 0.05));
}

.p-pn {
  border-radius: 8px;
  border: 1px solid var(--Black-12-border, rgba(0, 0, 0, 0.12));
  background: var(--White, #fff);
}

.p-prev {
}

.p-next {
}

.p-disabled {
}
</style>
