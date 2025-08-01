<script setup>

</script>

<template>
    <button class="btn btn_all active">
        <div class="btn__wrap">
            <span class="btn__icon"></span> Все
        </div>
    </button>
    <button class="btn btn_sausages">
        <div class="btn__wrap">
            <span class="btn__icon"></span> Колбасы
        </div>
    </button>
    <button class="btn btn_sosiski">
        <div class="btn__wrap">
            <span class="btn__icon"></span> Сосиски
        </div>
    </button>
    <button class="btn btn_chips">
        <div class="btn__wrap">
            <span class="btn__icon"></span> Чипсы
        </div>
    </button>
</template>

<style lang="scss" scoped>
    .btn {
        // transition: all 0.5s ease-in-out 0.5s;       

        .btn__wrap {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            font-size: 12px;
            color: #b0b0b0;
            height: 62px;
            border-radius: 49px;
            border: 1px solid #F1F0F5;
            transition: all 0s ease-in-out 0.1s;
            background-color: #F5F6F7;
            padding: 4.8px 8.8px 4.8px 4.8px;            

            span.btn__icon {
                width: 52px;
                height: 52px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #FFCE20;
                transition: all 0.5s ease-in-out;
                overflow: hidden;
                background-image: url(../assets/images/icons/sorting/sprites-sorting.png);
                background-position: 0px 0px;
            }

            @media (max-width: 599px) {
                flex-direction: column;
                width: 60px;
                height: 82px;
                gap: 3px;
                font-size: 9px;
                line-height: 100%;
                padding: 4.8px 4.8px 8.8px 4.8px; 

                span.btn__icon {
                    width: 50px;
                    height: 50px;
                    background-size: 200px;
                }                
            }
        }        

        &:hover, &:focus {
            .btn__wrap {
                color: #333333;
                background-color: #ffffff;
                border: 1px solid #ffffff;
                box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
            }
        }

        &.btn_all {
            .btn__wrap > .btn__icon {
                background-position: 0px 0px;
            }
        }
        &.btn_sausages {
            .btn__wrap > .btn__icon {
                background-position: -54px 0px;
            }
        }
        &.btn_sosiski {
            .btn__wrap > .btn__icon {
                background-position: -108px 0px;
            }
        }
        &.btn_chips {
            .btn__wrap > .btn__icon {
                background-position: -162px 0px;
            }
        }

        @media (max-width: 599px) {
            
            &.btn_all {
                .btn__wrap > .btn__icon {
                    background-position: 0px 2px;
                }
            }
            &.btn_sausages {
                .btn__wrap > .btn__icon {
                    background-position: -50px 2px;
                }
            }
            &.btn_sosiski {
                .btn__wrap > .btn__icon {
                    background-position: -98px 2px;
                }
            }
            &.btn_chips {
                .btn__wrap > .btn__icon {
                    background-position: -150px 2px;
                }
            }
        }
    }

    .btn.active {   
        
        .btn__wrap {
            color: #333333;
            background-color: #ffffff;
            border: 1px solid #ffffff;
            box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
        }

        &:hover, &:focus {
            cursor: default;
        }
    }
</style>
