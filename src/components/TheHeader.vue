<template>
    <div class="wrapper">
        <h1 class="title">
            <a class="logo" href="/">Kanban card</a>
        </h1>
        <div class="actions">
            <div>
                <a @click="handlePrintClick()" class="link">Print</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader',
        methods: {
            handlePrintClick() {
                if (typeof window !== 'undefined') {
                    window.print();
                }
            },
        },
    };
</script>

<style scoped>
    .wrapper {
        position: relative;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        background-color: #111111;
        padding: 1rem;
    }

    .title {
        margin: 0;
        font-size: 1rem;
    }

    .logo {
        color: #f4f4f4;
        text-decoration: none;
    }

    .actions {
        display: flex;
    }

    .link {
        border-bottom: 1px dotted #f4f4f4;
        text-decoration: none;
        color: #f4f4f4;
    }

    .link:hover {
        color: #9eebcf;
        border-bottom-color: #9eebcf;
        cursor: pointer;
    }

    @media print {
        .wrapper {
            display: none;
        }

        .logo {
            display: none;
        }
    }
</style>
