$(document).ready(function(){
    MainEvent = new MainEvent();
});

class MainEvent{
    constructor(){
        this.initEvent();
    }
    initEvent(){
        $(document).on("click",".signup-link",function(){

            $(".signin").hide();
        });

        //sign-up
        $("body").on("submit",".signup",function (e) {
            let password = $(".pass").children().eq(0).val();
            let repass = $(".repass").children().eq(0).val();

            if (password != repass)
            {
                e.preventDefault();
                alert("Password does not match");
                $(".user").children().eq(0).val("");
                $(".pass").children().eq(0).val("");
                $(".repass").children().eq(0).val("");
            }
        })
    }
}
