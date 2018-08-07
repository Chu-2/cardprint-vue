<template>
    <div id="app">
        <TheHeader/>
        <div class="mainWrapper">
            <div class="canvas"></div>
            <div class="controls">
                <ControlPanel/>
            </div>
        </div>
    </div>
</template>

<script>
    import TheHeader from './components/TheHeader.vue';
    import ControlPanel from './components/ControlPanel.vue';

    export default {
        name: 'app',
        components: {
            TheHeader,
            ControlPanel
        },
    };
</script>

<style scoped>
    .mainWrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .canvas {
        position: relative;
        flex: 1;
    }

    .controls {
        width: 18rem;
        background-color: #fffceb;
        border-left: 1px solid #fbf1a9;
    }

    @media print {
        .mainWrapper {
            position: relative;
            display: block;
        }

        .controls {
            display: none;
        }
    }
</style>
