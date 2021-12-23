<template>
  <div class="modal fade" role="dialog" tabindex="-1" id="modal-1">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Card Data</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="data">
                    <p>Name</p>
                    <p>Williams Eze</p>
                </div>
                <div class="data">
                    <p>Bank Name</p>
                    <p>United Bank for Africa</p>
                </div>
                <div class="data">
                    <p>Amount</p>
                    <p>₦25, 000</p>
                </div>
                <div class="data">
                    <p>Name</p>
                    <p>Paragraph</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApiSuccessModal'
}
</script>

<style>

</style>