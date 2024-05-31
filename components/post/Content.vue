<script setup lang="ts">
const props = defineProps<{ content: string }>()

const cleanedContent = removeStyleAttributes(props.content)

function createModifiedHTML(html: string) {
  const elements: any = []
  const lines = html.split(`</p>`) // Pisahkan HTML menjadi bagian-bagian

  lines.map(line => elements.push(line))

  return elements
}
const modifiedHTML = createModifiedHTML(cleanedContent)
</script>

<template>
  <div class="article">
    <div
      v-for="(element, index) in modifiedHTML"
      :key="index"
      v-html="element"
    />
  </div>
</template>

<style>
.article p {
    margin-top: 0;
    margin-bottom: 0.75rem;
}

.article figure {
    margin: 0 0 1rem;
}

.article img {
    margin-bottom: 0.5rem;
    line-height: 1;
    width: 100%;
}

.article figcaption {
    font-size: 0.875em;
}

.article ul {
    list-style-type: disc;
    padding-left: 1em;
}

.article ol {
    list-style-type: decimal;
    padding-left: 1em;
}

.article table {
    margin-left: 1em;
}

.article ol,
.article ul {
    padding-left: 1.5rem;
}

.article ol ul,
.article li {
    margin-bottom: 0.25rem;
    padding-left: 0.5rem;
}

.article ol>li {
    margin-left: 1em;
}

.article hr {
    margin: 1rem 0;
    border: 0;
    border-top: solid;
    opacity: 0.25;
}

.article h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article h5 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.article pre {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    overflow: auto;
}

@media (min-width: 360px) {
    .article p {
        font-size: 1rem;
    }

    .article h1 {
        font-size: 1.25rem;
        /* line-height: 2rem; */
    }

    .article h2 {
        font-size: 1.2rem;
        /* line-height: 1.85rem; */
    }

    .article h3 {
        font-size: 1.15rem;
        /* line-height: 1.65rem; */
    }

    .article h4 {
        font-size: 1.1rem;
        /* line-height: 1.5rem; */

    }

    .article h5 {
        font-size: 1.05rem;
        /* line-height: 1.35rem; */
    }

    .article h6 {
        font-size: 1rem;
        /* line-height: 1rem; */
    }
}

@media (min-width: 1024px) {
    .article p {
        font-size: 1.2rem;
    }

    .article h1 {
        font-size: 1.7rem;
        /* line-height: 2.5rem; */
    }

    .article h2 {
        font-size: 1.6rem;
        /* line-height: 2.25rem; */
    }

    .article h3 {
        font-size: 1.5rem;
        /* line-height: 2rem; */
    }

    .article h4 {
        font-size: 1.4rem;
        /* line-height: 1.75rem; */
    }

    .article h5 {
        font-size: 1.3rem;
        /* line-height: 1.5rem; */
    }

    .article h6 {
        font-size: 1.2rem;
        /* line-height: 1.25rem; */
    }
}
</style>
