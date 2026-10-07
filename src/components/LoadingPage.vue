<template>
    <div>
        <div>
            <div >
                <Skeleton shape="circle" size="3.5rem" />
                <div>
                    <div>
                        <Skeleton width="40%" height="1.5rem" />
                    </div>
                    <div>
                        <Skeleton width="100%" borderRadius="4px" />
                        <Skeleton width="90%" borderRadius="4px" />
                    </div>
                    <Skeleton />
                    <div>
                        <Skeleton width="4rem" height="1.75rem" />
                        <Skeleton width="4rem" height="1.75rem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Skeleton from 'primevue/skeleton';
</script>