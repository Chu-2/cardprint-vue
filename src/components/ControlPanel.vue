<template>
    <div class="wrapper">
        <div class="control">
            <h3 class="controlHeading">Card color</h3>

            <chrome-picker :value="colors" class="colorPicker"/>
        </div>

        <div class="control">
            <h3 class="controlHeading">Text Color</h3>

            <div class="fgChooser">
                <input
                        type="radio"
                        name="fgColor"
                        id="fgColorDark"
                        value="dark"
                />
                <label for="fgColorDark">Dark</label>
            </div>

            <div class="fgChooser">
                <input
                        type="radio"
                        name="fgColor"
                        id="fgColorLight"
                        value="light"
                />
                <label for="fgColorLight">Light</label>
            </div>
        </div>

        <div class="control">
            <h3 class="controlHeading">Size</h3>

            <div class="sizeChooser">
                <input
                        type="radio"
                        name="size"
                        id="sizeBig"
                        value="big"
                />
                <label for="sizeBig">Big</label>
            </div>

            <div class="sizeChooser">
                <input
                        type="radio"
                        name="size"
                        id="sizeSmall"
                        value="small"
                />
                <label for="sizeSmall">Small</label>
            </div>
        </div>
    </div>
</template>

<script>
    import {Chrome} from 'vue-color';

    export default {
        name: "ControlPanel",
        components: {
            'chrome-picker': Chrome,
        },
        data() {
            return {
                colors: '#194d33'
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 1rem;
        padding-top: 4rem;
    }

    .control {
        margin-bottom: 1rem;
    }

    .colorPicker {
        margin-bottom: 1rem;
    }

    .controlHeading {
        margin: .25rem 0;
        font-size: .8rem;
        text-transform: uppercase;
    }

    .fgChooser,
    .sizeChooser {
        margin-bottom: .125rem;
    }

    .fgChooser label,
    .sizeChooser label {
        margin-left: .5rem;
    }
</style>
