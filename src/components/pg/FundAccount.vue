<template>
    <div class="fund-wrapper">
        <div>
            <div class="content-container">
                <h1 style="font-size: 80px">FUND</h1>
                <p>fund your account using the&nbsp;paystack api</p>
            </div>
        </div>
        <div class="form-container glee">
            <form>
                <div class="input-container">
                    <input class="form-control" type="text" placeholder="Card">
                </div>
                <div class="input-container">
                    <input class="form-control" type="email" placeholder="Exp" style="margin-right: 5%;">
                    <input class="form-control" type="password" placeholder="3-digit Code">
                </div>
                <div class="input-container">
                    <input class="form-control" type="text" placeholder="Amount">
                </div>
                <div class="submit-btn">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    <div class="footerr"><img src="../../assets/down.svg"></div>
</template>

<script>
export default {
    name : 'FundAccount'
}
</script>

<style>
</style>