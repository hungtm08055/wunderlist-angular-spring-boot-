    $(document).ready(function(){

       const mainEvent = new MainEvent(); // khoi tao 1 lan de goi lai class ma ko can document ready o jquery.js
  
      document = $(this);

        

    // LIST
        var global;
        var tasklist_body;
        title = $("#user_id").html();


         //show list by userID
        $(".ds2text").load("list/getListByUserID?user_id="+title,function () {
            $.ajax({
                type: "GET",
                url: "list/getListByUserID?user_id="+title,
                data: {"title":JSON.stringify(title)},
                dataType: "json",
                success: function (response) {
                    var text ="";
                    for (var i=0; i< response.length;i++)
                    {
                       let a =  `<div class='ds2 danhsach' id_list="`+response[i].id+`">
                                    <div class="ds2-hover">
                                        <div class='ds2icon'>
                                            <svg class='list rtl-flip' width='20px' height='20px' viewBox='0 0 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g id='Web-svgs' stroke='none' stroke-width='1' fill-rule='evenodd'> <g id='list'> <path d='M3,7 C2.44,7 2,6.56 2,6 L2,5 C2,4.44 2.44,4 3,4 L4,4 C4.56,4 5,4.44 5,5 L5,6 C5,6.56 4.56,7 4,7 L3,7 Z M4,5 L3,5 L3,6 L4,6 L4,5 Z M7.5,6 C7.22,6 7,5.78 7,5.5 C7,5.22 7.22,5 7.5,5 L17.5,5 C17.78,5 18,5.22 18,5.5 C18,5.78 17.78,6 17.5,6 L7.5,6 Z M3,12 C2.44,12 2,11.56 2,11 L2,10 C2,9.44 2.44,9 3,9 L4,9 C4.56,9 5,9.44 5,10 L5,11 C5,11.56 4.56,12 4,12 L3,12 Z M4,10 L3,10 L3,11 L4,11 L4,10 Z M7.5,11 C7.22,11 7,10.78 7,10.5 C7,10.22 7.22,10 7.5,10 L17.5,10 C17.78,10 18,10.22 18,10.5 C18,10.78 17.78,11 17.5,11 L7.5,11 Z M3,17 C2.44,17 2,16.56 2,16 L2,15 C2,14.44 2.44,14 3,14 L4,14 C4.56,14 5,14.44 5,15 L5,16 C5,16.56 4.56,17 4,17 L3,17 Z M4,15 L3,15 L3,16 L4,16 L4,15 Z M7.5,16 C7.22,16 7,15.78 7,15.5 C7,15.22 7.22,15 7.5,15 L17.5,15 C17.78,15 18,15.22 18,15.5 C18,15.78 17.78,16 17.5,16 L7.5,16 Z' id='K'> </path> </g> </g>
                                            </svg>
                                        </div>
                                        <div class='ds2text hiddenclass danhsachtext'>
                                            `+response[i].title+`
                                        </div>
                                    </div>
                                </div>`;
                       text += a;
                    }
                    $(".ds").append(text);
                }
            });
        });

        // click list to show task by id_list
        $('body').on('click', '.ds2' , function()
        {  
            // highlight color
            $(this).addClass("list-highlight-color");
            $(this).siblings().removeClass("list-highlight-color");

            // id of class ds2
             id_list = $(this).attr('id_list');
            //pass id to task
            $(".tasklist-body").attr("id_list",id_list);
            $(".tasklist-body").children().eq(1).attr("id_list",id_list);
            $(".task-deleted").attr("id_list",id_list);         

            // on Uncompleted
            $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
            {
                    $.ajax({
                        type: "GET",
                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                        data: {"id": JSON.stringify(id_list)},
                        dataType: "json",   // datatype to receive
                        success: function (response)
                        {
                            //for search
                            $(".task-deleted").show();
                            $(".to-dos").show();

                            // show task
                            var text = "";
                            for (var i =0;i < response.length;i++) {
                                var date = new Date(response[i].createdate);


                                if (response[i].star == 0)
                                {
                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                             
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                    text += a;
                                }

                                    }
                                    $(".task-list").html(text);
                        }
                    });
                });

            // on Completed
            $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
            {
                $.ajax({
                    type: "GET",
                    url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                    data: {"id": JSON.stringify(id_list)},
                    dataType: "json",   // datatype to receive
                    success: function (response)
                    {
                        //for search
                        $(".task-deleted").show();
                        $(".to-dos").show();

                        // show task
                        var text1 = "";

                        for (var i =0;i<response.length;i++) {
                            var date = new Date(response[i].createdate);

                            if (response[i].star == 0)
                            {
                                let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                text1 += b;
                            }
                            else
                            {
                                let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                text1 += b;
                            }

                            }
                        $(".task-deleted").html(text1);

                    }
                });
            });

            // show title to #title-text of middle
            var title_list = $(this).children().eq(0).children().eq(1).html();
            $("#title-text").html(title_list);

            // pass id of list to #add_Task
            $(".id_list").val(id_list);
        });

        // double click to show edit list layout by id_list
        $('body').on('dblclick' , '.ds2' , function (e) // bind to execute 2 or more event to a element
        {
            global = $(this).children().eq(0).children().eq(1);

            // show id and title of list
            var id_list = $(this).attr('id_list');            
            var title_list =  $(this).find(".danhsachtext").html();
            $("#edit-list").val((title_list).trim());
            $(".id-list-none").val(id_list);

            // show edit layout
            $(".createlist-layout1").show();
            $(".layout-header-inputfake").show();
            $(".layout-member").show();
            $('#layout-header-optiontext2').css("color","#262626");
            $('#layout-header-optiontext2').css("border-bottom","1px solid #328ad6");                                            
       

        // layout->submit to save/cancel the edited list
            // Save button to edit list
            $('body').on('click' , '#btn-edit-list' , function ()
            {              
                // id_list and title_list
                var id_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(1).val();
                title_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(0).val();
                $(global).html(title_list);

                // update list
                $.ajax({
                    type: "PUT",
                    url: "/list/update/?id="+id_list,
                    data: {"title":JSON.stringify(title_list)},
                    dataType: "json",
                    success: function (response) {
                    }
                });

                // close layout
                $(".createlist-layout1").hide();                
            });

            // Cancel button
            $('body').on('click' , '.BTF2' , function()
            {
                // close layout
                $(".createlist-layout1").hide();
            });
        });

        // click ".createlist" to show create list layout
        $('body').on('click' , '.createlist' , function ()
        {           
            $(".createlist-layout").show();
            $(".layout-header-inputfake").show();
            $(".layout-member").show();
            $('#layout-header-optiontext2').css("color","#262626");
            $('#layout-header-optiontext2').css("border-bottom","1px solid #328ad6");
        });                 
            // Save button to add new list
            $('body').on('click' , '#btn-add-list' , function (e)
            {                
                // input text 
                var title_list = $(this).parent().parent().parent().parent().parent().children().eq(0).children().eq(1).children().eq(0).val();                
                let user_id = $(this).siblings().html();
                // insert new list
                if($("#add-list").val() !=0)
                {
                    $.ajax({
                        type: "POST",
                        url: "/list/add?user_id="+user_id,
                        data: {"title":JSON.stringify(title_list)},
                        dataType: "json",
                        success: function (response) {
                            cln = $(".ds2:first").clone().appendTo(".ds");
                            cln.children().eq(0).children().eq(1).html(title_list);
                            $("#add-list").val('');
                            var attr = cln.attr('id_list',response.id);    // last insert id
                        }
                    });

                    // close layout
                    $(".createlist-layout").hide();
                } 
                
                // use Enter to insert
                // $("#formList").submit(function (e)
                // {
                //     e.preventDefault();
                //     var title_list = $(this).children().eq(0).children().eq(1).children().eq(0).val();
                //     console.log(title_list);
                //     var form = $(this);
                //     $.ajax({
                //         type: form.attr('method'),
                //         url: form.attr('action'),
                //         data: {"title_list":title_list},
                //         dataType: "html",
                //         success: function (response) {
                //             $(".left").html(response);
                //             $("#add-list").val('');
                //         }
                //     });
                // });
            });
                            
            // Cancel button
            $('body').on('click' , '.BTF2' , function()
            {
                // close layout
                $(".createlist-layout").hide();
            });

        // right click ".ds2" to show delete-layout list 
        $('body').on('contextmenu' , '.ds2' , function (e)
        {
              parent1 = $(this);

            // show
            e.preventDefault(); 
            $(".left-contextmenu").toggle();            
            $(".left-contextmenu").css({left:e.pageX, top:e.pageY});
            
            // click ".LC8" to show delete-layout
            $("body").on('click' , '.LC8' , function ()
            { 
                $(".delete-layout").show();
                $(".left-contextmenu").hide();
            });

            // id and title of list
            id_list = $(this).attr('id_list');
            var title_list =  $(this).find(".danhsachtext").html();

            // delete-layout: receive id & title
            $(".list-id").val(id_list);
            $(".delete-layout-content1-text11").html(title_list);

            // delete-layout(list)->"delete list" button
            $('body').on('click' , ".BD2" , function ()
            {
                $(parent1).remove();
                $.ajax({
                    type: "DELETE",
                    url: "/list/delete/"+id_list,
                    data: {"id":JSON.stringify(id_list)},
                    dataType: "json",
                    success: function (response) {
                        alert("success")
                    }, error : function () {
                        alert("error")
                    }
                });

                // close layout
                $(".delete-layout").hide();
            });

        });



        // TASK and its parts
    
        // click task to ACTION its parts by id_task 

            // on Uncompleted
            $('body').on('click' , '.tasklist-text' , function ()
            {
                var local_215 = $(this).parent();
                tasklist_body = local_215;

                global_216_star = $(this).parent().children().eq(3).children().eq(0).children().eq(0);
                global_217_unstar = $(this).parent().children().eq(3).children().eq(1).children().eq(0);
                global_218 = $(this);
                onduedate = $(this).parent().children().eq(2).children().eq(0);
                overduedate = $(this).parent().children().eq(2).children().eq(1);

                // id of class tasklist-text
                 var id_list = $(this).attr('id_list');
                 var id_task = $(this).attr('id_task');

                //pass id_task to form_duedate,form_reminder,form_subtask
                $("#form_duedate").attr("id_task",id_task);
                $("#form_reminder").attr("id_task",id_task);
                $("#form_subtask").attr("id_task",id_task);
                $("#form_comment").attr("id_task",id_task);
                $("#task_idOfFile").val(id_task);

                // title

                    // show
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            var text = "";
                            for (var i = 0; i < response.length; i++)
                            {
                                if (response[i].star == 0)
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                $("#detailtext").html(text);
                            }
                        }
                    }); // done

                    // Mark as Completed
                    $('body').on('click' , '.task-check-title' , function()
                    {
                        var call = tasklist_body;
                        var completed = $(tasklist_body).appendTo(".task-deleted");
                        completed.children().eq(1).children().eq(0).addClass("line-through");
                        completed.children().eq(1).children().eq(1).children().eq(0).addClass("block");

                        // completed.
                        local = $(this);
                        local.addClass("none");
                        local_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).addClass("block");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        status = $(this).parent().parent().parent().attr("status");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsCompleted?status=1&id="+id_task,
                            data: {"status":JSON.stringify(status)},
                            dataType: "json",
                            success: function (response) {
                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                //show title
                                $.ajax({
                                    type: "GET",
                                    url: "/task/showTaskDetail?id="+id_task,
                                    data: {"id":JSON.stringify(id_task)},
                                    dataType: "json",
                                    success: function (response) {

                                        var text = "";
                                        for (var i = 0; i < response.length; i++)
                                        {
                                            if (response[i].star == 0)
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            else
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            $("#detailtext").html(text);
                                        }
                                    }
                                }); // done with java

                                //show duedate
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op1").html(response);
                                    }
                                });

                                // show reminder
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                                    data: {"id_task":id_task},  //line 224
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op2").html(response);
                                    }
                                });

                                // show subtask
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                                    data: {"id_task":id_task},  // line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".plus-cln-father").html(response);
                                    }
                                });

                                // show file
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".file-list").html(response);
                                    }
                                });

                                // show comment
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".comment-father").html(response);
                                    }
                                });

                                //show  date create
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".datetime").html(response);
                                    }
                                });
                            }
                        });
                    });

                    // Mark as Uncompleted
                    $('body').on('click' , '.task-checked1-title' , function()
                    {
                        var call = tasklist_body;
                        var Uncompleted = $(tasklist_body).appendTo(".task-list");
                        Uncompleted.children().eq(1).children().eq(0).removeClass("line-through");
                        Uncompleted.children().eq(1).children().eq(1).children().eq(0).removeClass("block");

                        local = $(this);
                        local.removeClass("block");
                        local_sibbling = $(this).parent().parent().children().eq(0).children().eq(0).removeClass("none");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        unstatus = $(this).parent().parent().parent().attr("unstatus");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsUncompleted?status=0&id="+id_task,
                            data: {"status":JSON.stringify(status)},
                            dataType: "html",
                            success: function (response) {
                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                // show title
                                $.ajax({
                                    type: "GET",
                                    url: "/task/showTaskDetail?id="+id_task,
                                    data: {"id":JSON.stringify(id_task)},
                                    dataType: "json",
                                    success: function (response) {
                                        var text = "";
                                        for (var i = 0; i < response.length; i++)
                                        {
                                            if (response[i].star == 0)
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            else
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            $("#detailtext").html(text);
                                        }
                                    }
                                }); // done with java

                                //show duedate
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                                    data: {"id_task":id_task},  //line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op1").html(response);
                                    }
                                });

                                // show reminder
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                                    data: {"id_task":id_task},  //line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op2").html(response);
                                    }
                                });

                                // show subtask
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                                    data: {"id_task":id_task},  // line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".plus-cln-father").html(response);
                                    }
                                });

                                // show file
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".file-list").html(response);
                                    }
                                });

                                // show comment
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".comment-father").html(response);
                                    }
                                });

                                //show  date create
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".datetime").html(response);
                                    }
                                });
                            }
                        });
                    });

                    // Mark as Starred
                    $('body').on('click' , '.tasklist-staricon-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var star = $(this).parent().parent().children().eq(0).attr("star");

                        $(this).hide();
                        var this_sibbling = $(this).parent().parent().children().eq(2).children().eq(0).addClass("block");

                        global_216_star.addClass("star-none");
                        global_217_unstar.addClass("block");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsStarred?star=1&id="+id_task,
                            data: {"star":JSON.stringify(star)},
                            dataType: "json",
                            success: function (response) {
                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                if(condition == 0)
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "/task/showTaskDetail?id="+id_task,
                                        data: {"id":JSON.stringify(id_task)},
                                        dataType: "json",
                                        success: function (response) {
                                            var text = "";
                                            for (var i = 0; i < response.length; i++)
                                            {
                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                $("#detailtext").html(text);
                                            }
                                        }
                                    });
                                    // $.ajax({
                                    //     type: "post",
                                    //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                                    //     data: {"id_task":id_task , "id_list":id_list},
                                    //     dataType: "html",
                                    //     success: function (response) {
                                    //         $("#detailtext").html(response);
                                    //     }
                                    // });
                                }
                                else
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "/task/showTaskDetail?id="+id_task,
                                        data: {"id":JSON.stringify(id_task)},
                                        dataType: "json",
                                        success: function (response) {

                                            var text = "";
                                            for (var i = 0; i < response.length; i++)
                                            {
                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                $("#detailtext").html(text);
                                            }
                                        }
                                    });

                                    // $.ajax({
                                    //     type: "post",
                                    //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                                    //     data: {"id_task":id_task , "id_list":id_list},
                                    //     dataType: "html",
                                    //     success: function (response) {
                                    //         $("#detailtext").html(response);
                                    //         $(".task-check-title").addClass("none");
                                    //         $(".task-checked1-title").addClass("block");
                                    //     }
                                    // });
                                }
                            }
                        });
                    });

                    // Mark as Unstarred
                    $('body').on('click' , '.tasklist-staricon-check-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var star = $(this).parent().parent().children().eq(0).attr("star");

                        console.log(star)
                        $(this).removeClass("block");
                        var this_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).show();

                        global_216_star.removeClass("star-none");
                        global_217_unstar.removeClass("block");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsUnStarred?star=0&id="+id_task,
                            data: {"star":JSON.stringify(star)},
                            dataType: "json",
                            success: function (response) {

                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {

                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                // if(condition == 0)
                                // {
                                //     $.ajax({
                                //         type: "GET",
                                //         url: "/task/showTaskDetail?id="+id_task,
                                //         data: {"id":JSON.stringify(id_task)},
                                //         dataType: "json",
                                //         success: function (response) {
                                //             var text = "";
                                //             for (var i = 0; i < response.length; i++)
                                //             {
                                //                 if (response[i].star == 0)
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 else
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 $("#detailtext").html(text);
                                //             }
                                //         }
                                //     });
                                //     // $.ajax({
                                //     //     type: "post",
                                //     //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                                //     //     data: {"id_task":id_task , "id_list":id_list},
                                //     //     dataType: "html",
                                //     //     success: function (response) {
                                //     //         $("#detailtext").html(response);
                                //     //     }
                                //     // });
                                // }
                                // else
                                // {
                                //     $.ajax({
                                //         type: "GET",
                                //         url: "/task/showTaskDetail?id="+id_task,
                                //         data: {"id":JSON.stringify(id_task)},
                                //         dataType: "json",
                                //         success: function (response) {
                                //
                                //             var text = "";
                                //             for (var i = 0; i < response.length; i++)
                                //             {
                                //                 if (response[i].star == 0)
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 else
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 $("#detailtext").html(text);
                                //             }
                                //         }
                                //     });
                                //
                                //     // $.ajax({
                                //     //     type: "post",
                                //     //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                                //     //     data: {"id_task":id_task , "id_list":id_list},
                                //     //     dataType: "html",
                                //     //     success: function (response) {
                                //     //         $("#detailtext").html(response);
                                //     //         $(".task-check-title").addClass("none");
                                //     //         $(".task-checked1-title").addClass("block");
                                //     //     }
                                //     // });
                                // }
                            }
                        });
                    });

                    // Enter edit Task
                    $('body').on('submit' , '#edit_task' , function(e)
                    {
                        e.preventDefault();

                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");

                        var form = $(this);
                        $.ajax({
                            type: "PUT",
                            url: "/task/update?id="+id_task,
                            data: {"title":JSON.stringify(title_task)},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_218).html(title_task);
                            }
                        });
                    });
                    // $('body').on('mouseleave' , '#edit_task' , function(e)
                    // {
                    //     e.preventDefault();
                    //
                    //     var title_task = $(this).children().eq(0).val();
                    //     var id_task = $(this).parent().attr("id_task");
                    //
                    //     var form = $(this);
                    //     $.ajax({
                    //         type: "PUT",
                    //         url: "/task/update?id="+id_task,
                    //         data: {"title":JSON.stringify(title_task)},
                    //         dataType: "html",
                    //         success: function (response) {
                    //             form.children().eq(0).val(title_task);
                    //             $(global_218).html(title_task);
                    //         }
                    //     });
                    // });

                // due date

                    //show
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            // $(".op1").html(response);
                            var text ="";
                            for ( var i = 0; i < response.length; i++)
                            {
                                if (response[i].duedate == 0)
                                {
                                    let a = `
                                    <form style="display: flex;" action="/task/update" method="PUT" id="form_duedate" id_task="`+id_task+`">
                                        <div class="section-icon"><svg class="date" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="date"> <path d="M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M8.5,12 C7.68,12 7,11.32 7,10.5 L7,9.5 C7,8.68 7.68,8 8.5,8 C9.32,8 10,8.68 10,9.5 L10,10.5 C10,11.32 9.32,12 8.5,12 L8.5,12 Z M5.5,11 C5.22,11 5,10.78 5,10.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,10.5 C6,10.78 5.78,11 5.5,11 L5.5,11 Z M8.5,9 C8.22,9 8,9.22 8,9.5 L8,10.5 C8,10.78 8.22,11 8.5,11 C8.78,11 9,10.78 9,10.5 L9,9.5 C9,9.22 8.78,9 8.5,9 L8.5,9 Z M11.5,11 C11.22,11 11,10.78 11,10.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,10.5 C12,10.78 11.78,11 11.5,11 L11.5,11 Z M14.5,11 C14.22,11 14,10.78 14,10.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,10.5 C15,10.78 14.78,11 14.5,11 L14.5,11 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,13.5 C5,13.22 5.22,13 5.5,13 C5.78,13 6,13.22 6,13.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,13.5 C8,13.22 8.22,13 8.5,13 C8.78,13 9,13.22 9,13.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,13.5 C11,13.22 11.22,13 11.5,13 C11.78,13 12,13.22 12,13.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,13.5 C14,13.22 14.22,13 14.5,13 C14.78,13 15,13.22 15,13.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z"></path> </g> </g> </svg></div>
                                        <div class="section-text">
                                            <input type="date" name="date" value="">
                                            <input class="plus-cln-text-input-none" name="duedate_id" type="text" value="`+id_task+`">
                                            <input type="submit" class="none">
                                        </div>
                                    </form>
                                    `
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                    <form style="display: flex;" action="/task/update" method="PUT" id="form_duedate" id_task="`+id_task+`">
                                        <div class="section-icon"><svg class="date" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="date"> <path d="M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M8.5,12 C7.68,12 7,11.32 7,10.5 L7,9.5 C7,8.68 7.68,8 8.5,8 C9.32,8 10,8.68 10,9.5 L10,10.5 C10,11.32 9.32,12 8.5,12 L8.5,12 Z M5.5,11 C5.22,11 5,10.78 5,10.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,10.5 C6,10.78 5.78,11 5.5,11 L5.5,11 Z M8.5,9 C8.22,9 8,9.22 8,9.5 L8,10.5 C8,10.78 8.22,11 8.5,11 C8.78,11 9,10.78 9,10.5 L9,9.5 C9,9.22 8.78,9 8.5,9 L8.5,9 Z M11.5,11 C11.22,11 11,10.78 11,10.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,10.5 C12,10.78 11.78,11 11.5,11 L11.5,11 Z M14.5,11 C14.22,11 14,10.78 14,10.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,10.5 C15,10.78 14.78,11 14.5,11 L14.5,11 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,13.5 C5,13.22 5.22,13 5.5,13 C5.78,13 6,13.22 6,13.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,13.5 C8,13.22 8.22,13 8.5,13 C8.78,13 9,13.22 9,13.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,13.5 C11,13.22 11.22,13 11.5,13 C11.78,13 12,13.22 12,13.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,13.5 C14,13.22 14.22,13 14.5,13 C14.78,13 15,13.22 15,13.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z"></path> </g> </g> </svg></div>
                                        <div class="section-text">
                                            <input type="date" name="date" value="`+response[i].duedate+`">
                                            <input class="plus-cln-text-input-none" name="duedate_id" type="text" value="`+id_task+`">
                                            <input type="submit" class="none">
                                        </div>
                                    </form>
                                    `
                                    text += a;
                                }
                            }
                            $(".op1").html(text);
                        }
                    });

                    //Enter to add duedate
                    $('body').on('submit' , '#form_duedate' , function(e)
                    {
                        var d = new Date();

                        var month = d.getMonth()+1;
                        var day = d.getDate();

                        var current_date = d.getFullYear() + '-' +
                            (month<10 ? '0' : '') + month + '-' +
                            (day<10 ? '0' : '') + day;

                            e.preventDefault();

                             id_task = $(this).attr("id_task");
                             duedate = $(this).children().eq(1).children().eq(0).val();
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            form = $(this);

                            $.ajax({
                                type: "PUT",
                                url: "/task/updateDuedate?id="+id_task,
                                data: {"duedate":JSON.stringify(duedate)},
                                dataType: "json",
                                success: function (response) {

                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                    });
                    // $('body').on('mouseleave' , '#form_duedate' , function(e)
                    // {
                    //     var d = new Date();
                    //
                    //     var month = d.getMonth()+1;
                    //     var day = d.getDate();
                    //
                    //     var current_date = d.getFullYear() + '-' +
                    //         (month<10 ? '0' : '') + month + '-' +
                    //         (day<10 ? '0' : '') + day;
                    //
                    //         e.preventDefault();
                    //
                    //         var id_task = $(this).attr("id_task");
                    //         var duedate = $(this).children().eq(0).children().eq(0).val();
                    //         var date = new Date(duedate);
                    //         var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                    //
                    //
                    //         form = $(this);
                    //
                    //         $.ajax({
                    //         type: "PUT",
                    //         url: "/task/updateDuedate?id="+id_task,
                    //         data: {"duedate":JSON.stringify(duedate)},
                    //         dataType: "json",
                    //         success: function (response) {
                    //
                    //             if(duedate >= current_date)
                    //             {
                    //                 onduedate.html(format_duedate);
                    //                 overduedate.html('');
                    //             }
                    //             else
                    //             {
                    //                 overduedate.html(format_duedate);
                    //                 onduedate.html('');
                    //             }
                    //         }
                    //     });
                    // });

                // reminder

                    // show
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            // $(".op2").html(response);
                            var text="";
                            for ( var i = 0; i < response.length; i++)
                            {
                                if(response[i].reminder == 0)
                                {
                                    let a = `
                                    <div class="reminder-icon"><svg class="reminder" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="reminder"> <path d="M3.26,6.6 C3.1,6.24 3,5.88 3,5.5 C3,4.12 4.12,3 5.5,3 C6.04,3 6.54,3.18 6.98,3.5 C7.2,3.66 7.52,3.62 7.68,3.4 C7.86,3.18 7.8,2.86 7.58,2.7 C6.98,2.24 6.24,2 5.5,2 C3.58,2 2,3.58 2,5.5 C2,6.02 2.12,6.54 2.38,7.04 C2.46,7.22 2.64,7.32 2.82,7.32 C2.9,7.32 2.98,7.3 3.04,7.28 C3.3,7.14 3.4,6.84 3.26,6.6 L3.26,6.6 Z M14.5,2 C13.76,2 13.04,2.24 12.42,2.7 C12.2,2.86 12.16,3.18 12.32,3.4 C12.48,3.62 12.8,3.66 13.02,3.5 C13.46,3.18 13.98,3 14.5,3 C15.88,3 17,4.12 17,5.5 C17,5.88 16.92,6.24 16.74,6.6 C16.62,6.84 16.72,7.14 16.96,7.28 C17.04,7.3 17.1,7.32 17.18,7.32 C17.36,7.32 17.54,7.22 17.64,7.04 C17.88,6.54 18,6.02 18,5.5 C18,3.58 16.44,2 14.5,2 L14.5,2 Z M17,11 C17,7.14 13.86,4 10,4 C6.14,4 3,7.14 3,11 C3,13 3.84,14.82 5.2,16.1 L4.14,17.14 C3.96,17.34 3.96,17.66 4.14,17.86 C4.24,17.96 4.38,18 4.5,18 C4.62,18 4.76,17.96 4.86,17.86 L5.98,16.72 C7.12,17.52 8.5,18 10,18 C11.5,18 12.88,17.52 14.02,16.72 L15.14,17.86 C15.24,17.96 15.38,18 15.5,18 C15.62,18 15.76,17.96 15.86,17.86 C16.04,17.66 16.04,17.34 15.86,17.14 L14.8,16.1 C16.16,14.82 17,13 17,11 L17,11 Z M4,11 C4,7.7 6.7,5 10,5 C13.3,5 16,7.7 16,11 C16,14.3 13.3,17 10,17 C6.7,17 4,14.3 4,11 L4,11 Z M10.5,7 C10.22,7 10,7.22 10,7.5 L10,11 L7.46,11 C7.2,11 6.96,11.22 6.96,11.5 C6.96,11.78 7.2,12 7.46,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,7.5 C11,7.22 10.78,7 10.5,7 L10.5,7 Z" id="…"></path> </g> </g> </svg></div>
                                        <form action="/task/updateReminder" method="PUT" id="form_reminder" id_task='`+id_task+`'>
                                            <div class="section-text">
                                                <input type="time" name="time" value="">
                                                <input type="submit" class="none">
                                            </div>
                                        </form>
                                    `
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                    <div class="reminder-icon"><svg class="reminder" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="reminder"> <path d="M3.26,6.6 C3.1,6.24 3,5.88 3,5.5 C3,4.12 4.12,3 5.5,3 C6.04,3 6.54,3.18 6.98,3.5 C7.2,3.66 7.52,3.62 7.68,3.4 C7.86,3.18 7.8,2.86 7.58,2.7 C6.98,2.24 6.24,2 5.5,2 C3.58,2 2,3.58 2,5.5 C2,6.02 2.12,6.54 2.38,7.04 C2.46,7.22 2.64,7.32 2.82,7.32 C2.9,7.32 2.98,7.3 3.04,7.28 C3.3,7.14 3.4,6.84 3.26,6.6 L3.26,6.6 Z M14.5,2 C13.76,2 13.04,2.24 12.42,2.7 C12.2,2.86 12.16,3.18 12.32,3.4 C12.48,3.62 12.8,3.66 13.02,3.5 C13.46,3.18 13.98,3 14.5,3 C15.88,3 17,4.12 17,5.5 C17,5.88 16.92,6.24 16.74,6.6 C16.62,6.84 16.72,7.14 16.96,7.28 C17.04,7.3 17.1,7.32 17.18,7.32 C17.36,7.32 17.54,7.22 17.64,7.04 C17.88,6.54 18,6.02 18,5.5 C18,3.58 16.44,2 14.5,2 L14.5,2 Z M17,11 C17,7.14 13.86,4 10,4 C6.14,4 3,7.14 3,11 C3,13 3.84,14.82 5.2,16.1 L4.14,17.14 C3.96,17.34 3.96,17.66 4.14,17.86 C4.24,17.96 4.38,18 4.5,18 C4.62,18 4.76,17.96 4.86,17.86 L5.98,16.72 C7.12,17.52 8.5,18 10,18 C11.5,18 12.88,17.52 14.02,16.72 L15.14,17.86 C15.24,17.96 15.38,18 15.5,18 C15.62,18 15.76,17.96 15.86,17.86 C16.04,17.66 16.04,17.34 15.86,17.14 L14.8,16.1 C16.16,14.82 17,13 17,11 L17,11 Z M4,11 C4,7.7 6.7,5 10,5 C13.3,5 16,7.7 16,11 C16,14.3 13.3,17 10,17 C6.7,17 4,14.3 4,11 L4,11 Z M10.5,7 C10.22,7 10,7.22 10,7.5 L10,11 L7.46,11 C7.2,11 6.96,11.22 6.96,11.5 C6.96,11.78 7.2,12 7.46,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,7.5 C11,7.22 10.78,7 10.5,7 L10.5,7 Z" id="…"></path> </g> </g> </svg></div>
                                        <form action="/task/updateReminder" method="PUT" id="form_reminder" id_task='`+id_task+`'>
                                            <div class="section-text">
                                                <input type="time" name="time" value="`+response[i].reminder+`">
                                                <input type="submit" class="none">
                                            </div>
                                        </form>
                                    `
                                    text += a;
                                }
                            }
                            $(".op2").html(text);
                        }
                    });

                    // Enter to add reminder
                    $("body").on('submit' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: "PUT",
                            url: "/task/updateReminder?id="+id_task,
                            data: {"reminder":JSON.stringify(reminder)},
                            dataType: "json",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });
                    // $("body").on('mouseleave' , "#form_reminder" , function(e)
                    // {
                    //     e.preventDefault();
                    //
                    //     var id_task = $(this).attr("id_task");
                    //     var reminder = $(this).children().eq(0).children().eq(0).val();
                    //
                    //     var form = $(this);
                    //
                    //     $.ajax({
                    //         type: "PUT",
                    //         url: "/task/updateReminder?id="+id_task,
                    //         data: {"reminder":JSON.stringify(reminder)},
                    //         dataType: "json",
                    //         success: function (response) {
                    //             cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                    //             cln.children().eq(1).children().eq(1).html(response);
                    //         }
                    //     });
                    // });

                // Subtask

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                // file

                    // show
                    $.ajax({
                        type: "GET",
                        url: "/file/showbyTaskID?task_id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            var text = "";
                            for ( var i = 0; i < response.length; i++)
                            {
                                date = new Date(response[i].createdate)

                                let a = `
                                    <div class="file-list-layout">
                                        <div class="file-list-content" date_create="`+date.toLocaleString()+`">
                                                <div class="file-list-content-icon"><img width="40" height="40" src="upload/`+response[i].title+`>" alt=""></div>
                                                <div class="file-list-content-text">
                                                    <a href="upload/`+response[i].title+`"><div class="file-list-content-text-imgname">`+response[i].title+`</div></a>
                                                    <div class="file-list-content-text-time">
                                                        <img src="../image/text.png" style="border-radius:50%;" width="15" height="15" alt="">
                                                        <div class="file-list-content-text-timetext">`+date.toLocaleString()+`</div>
                                                        <div class="file-remove">x</div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                `
                                text +=a;
                            }
                            $(".file-list").html(text);
                        }
                    });

                // Comment

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                //date create

                    //show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".datetime").html(response);
                        }
                    });
            });

            // on Completed
            $('body').on('click', '.task-deleted-text1', function ()
            {
                var local = $(this).parent();
                tasklist_body = local;

                global_327_star = $(this).parent().children().eq(3).children().eq(0).children().eq(0);
                global_328_unstar = $(this).parent().children().eq(3).children().eq(1).children().eq(0);
                global_350 = $(this).children().eq(0);
                onduedate = $(this).parent().children().eq(2).children().eq(0);
                overduedate = $(this).parent().children().eq(2).children().eq(1);

                // id of class task-deleted-text1
                var id_list = $(this).attr('id_list');
                var id_task = $(this).attr('id_task');

                //pass id_task to form_duedate,form_reminder,subtask
                $("#form_duedate").attr("id_task",id_task);
                $("#form_reminder").attr("id_task",id_task);
                $("#form_subtask").attr("id_task",id_task);
                $("#form_comment").attr("id_task",id_task);
                // $("#form_file").attr("id_task",id_task);
                $("#task_idOfFile").val(id_task);

                // title

                    // show
                    $.ajax({
                    type: "GET",
                    url: "/task/showTaskDetail?id="+id_task,
                    data: {"id":JSON.stringify(id_task)},
                    dataType: "json",
                    success: function (response) {

                        var text = "";
                        for (var i = 0; i < response.length; i++)
                        {
                            if (response[i].star == 0)
                            {
                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                text += a;
                            }
                            else
                            {
                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                text += a;
                            }
                            $("#detailtext").html(text);
                        }
                    }
                });

                    // Mark as Completed
                    $('body').on('click' , '.task-check-title' , function()
                    {
                        var call = tasklist_body;
                        var completed = $(tasklist_body).appendTo(".task-deleted");
                        completed.children().eq(1).addClass("line-through");
                        completed.children().eq(1).children().eq(1).children().eq(0).removeClass("none");

                        local = $(this);
                        local.addClass("none");
                        local_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).addClass("block");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        status = $(this).parent().parent().parent().attr("status");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsCompleted?status=1&id="+id_task,
                            data: {"status":JSON.stringify(status)},
                            dataType: "json",
                            success: function (response) {
                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                //show title
                                $.ajax({
                                    type: "GET",
                                    url: "/task/showTaskDetail?id="+id_task,
                                    data: {"id":JSON.stringify(id_task)},
                                    dataType: "json",
                                    success: function (response) {

                                        var text = "";
                                        for (var i = 0; i < response.length; i++)
                                        {
                                            if (response[i].star == 0)
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            else
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            $("#detailtext").html(text);
                                        }
                                    }
                                }); // done with java

                                //show duedate
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op1").html(response);
                                    }
                                });

                                // show reminder
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                                    data: {"id_task":id_task},  //line 224
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op2").html(response);
                                    }
                                });

                                // show subtask
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                                    data: {"id_task":id_task},  // line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".plus-cln-father").html(response);
                                    }
                                });

                                // show file
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".file-list").html(response);
                                    }
                                });

                                // show comment
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".comment-father").html(response);
                                    }
                                });

                                //show  date create
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".datetime").html(response);
                                    }
                                });
                            }
                        });
                    });

                    // Mark as Uncompleted
                    $('body').on('click' , '.task-checked1-title' , function()
                    {
                        var call = tasklist_body;
                        var Uncompleted = $(tasklist_body).appendTo(".task-list");
                        Uncompleted.children().eq(1).removeClass("line-through");
                        Uncompleted.children().eq(1).children().eq(1).children().eq(0).addClass("none");

                        local = $(this);
                        local.removeClass("block");
                        local_sibbling = $(this).parent().parent().children().eq(0).children().eq(0).removeClass("none");

                        // attr of star-father
                        id_list = $(this).parent().parent().parent().attr("id_list");
                        id_task = $(this).parent().parent().parent().attr("id_task");
                        unstatus = $(this).parent().parent().parent().attr("unstatus");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsUncompleted?status=0&id="+id_task,
                            data: {"status":JSON.stringify(status)},
                            dataType: "html",
                            success: function (response) {
                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                // show title
                                $.ajax({
                                    type: "GET",
                                    url: "/task/showTaskDetail?id="+id_task,
                                    data: {"id":JSON.stringify(id_task)},
                                    dataType: "json",
                                    success: function (response) {
                                        var text = "";
                                        for (var i = 0; i < response.length; i++)
                                        {
                                            if (response[i].star == 0)
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            else
                                            {
                                                let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                text += a;
                                            }
                                            $("#detailtext").html(text);
                                        }
                                    }
                                }); // done with java

                                //show duedate
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                                    data: {"id_task":id_task},  //line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op1").html(response);
                                    }
                                });

                                // show reminder
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                                    data: {"id_task":id_task},  //line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".op2").html(response);
                                    }
                                });

                                // show subtask
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                                    data: {"id_task":id_task},  // line 225
                                    dataType: "html",
                                    success: function (response) {
                                        $(".plus-cln-father").html(response);
                                    }
                                });

                                // show file
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".file-list").html(response);
                                    }
                                });

                                // show comment
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".comment-father").html(response);
                                    }
                                });

                                //show  date create
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                                    data: {"id_task":id_task},
                                    dataType: "html",
                                    success: function (response) {
                                        $(".datetime").html(response);
                                    }
                                });
                            }
                        });
                    });

                    // Mark as Starred
                    $('body').on('click' , '.tasklist-staricon-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var star = $(this).parent().parent().children().eq(0).attr("star");

                        $(this).hide();
                        var this_sibbling = $(this).parent().parent().children().eq(2).children().eq(0).addClass("block");

                        global_327_star.addClass("star-none");
                        global_328_unstar.addClass("block");


                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsStarred?star=1&id="+id_task,
                            data: {"star":JSON.stringify(star)},
                            dataType: "json",
                            success: function (response) {
                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                if(condition == 0)
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "/task/showTaskDetail?id="+id_task,
                                        data: {"id":JSON.stringify(id_task)},
                                        dataType: "json",
                                        success: function (response) {
                                            var text = "";
                                            for (var i = 0; i < response.length; i++)
                                            {
                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                $("#detailtext").html(text);
                                            }
                                        }
                                    });
                                    // $.ajax({
                                    //     type: "post",
                                    //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                                    //     data: {"id_task":id_task , "id_list":id_list},
                                    //     dataType: "html",
                                    //     success: function (response) {
                                    //         $("#detailtext").html(response);
                                    //     }
                                    // });
                                }
                                else
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "/task/showTaskDetail?id="+id_task,
                                        data: {"id":JSON.stringify(id_task)},
                                        dataType: "json",
                                        success: function (response) {

                                            var text = "";
                                            for (var i = 0; i < response.length; i++)
                                            {
                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=1 starred=0>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                                    text += a;
                                                }
                                                $("#detailtext").html(text);
                                            }
                                        }
                                    });

                                    // $.ajax({
                                    //     type: "post",
                                    //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                                    //     data: {"id_task":id_task , "id_list":id_list},
                                    //     dataType: "html",
                                    //     success: function (response) {
                                    //         $("#detailtext").html(response);
                                    //         $(".task-check-title").addClass("none");
                                    //         $(".task-checked1-title").addClass("block");
                                    //     }
                                    // });
                                }
                            }
                        });
                    });

                    // Mark as Unstarred
                    $('body').on('click' , '.tasklist-staricon-check-title' , function()
                    {
                        // attr of status father
                        var id_list = $(this).parent().parent().children().eq(0).attr("id_list");
                        var id_task = $(this).parent().parent().children().eq(0).attr("id_task");
                        var unstar = $(this).parent().parent().children().eq(0).attr("unstar");

                        $(this).removeClass("block");
                        var this_sibbling = $(this).parent().parent().children().eq(1).children().eq(0).show();

                        global_327_star.removeClass("star-none");
                        global_328_unstar.removeClass("block");

                        $.ajax({
                            type: "PUT",
                            url: "/task/markAsUnStarred?star=0&id="+id_task,
                            data: {"star":JSON.stringify(star)},
                            dataType: "json",
                            success: function (response) {

                                $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {

                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text1 = "";

                                            for (var i =0;i<response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }
                                                else
                                                {
                                                    let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                                    text1 += b;
                                                }

                                            }
                                            $(".task-deleted").html(text1);

                                        }
                                    });
                                });

                                $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                                {
                                    $.ajax({
                                        type: "GET",
                                        url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                                        data: {"id": JSON.stringify(id_list)},
                                        dataType: "json",   // datatype to receive
                                        success: function (response)
                                        {
                                            //for search
                                            $(".task-deleted").show();
                                            $(".to-dos").show();

                                            // show task
                                            var text = "";
                                            for (var i =0;i < response.length;i++) {
                                                var date = new Date(response[i].createdate);

                                                if (response[i].star == 0)
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }
                                                else
                                                {
                                                    let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                                    text += a;
                                                }

                                            }
                                            $(".task-list").html(text);
                                        }
                                    });
                                });

                                // if(condition == 0)
                                // {
                                //     $.ajax({
                                //         type: "GET",
                                //         url: "/task/showTaskDetail?id="+id_task,
                                //         data: {"id":JSON.stringify(id_task)},
                                //         dataType: "json",
                                //         success: function (response) {
                                //             var text = "";
                                //             for (var i = 0; i < response.length; i++)
                                //             {
                                //                 if (response[i].star == 0)
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 else
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 $("#detailtext").html(text);
                                //             }
                                //         }
                                //     });
                                //     // $.ajax({
                                //     //     type: "post",
                                //     //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                                //     //     data: {"id_task":id_task , "id_list":id_list},
                                //     //     dataType: "html",
                                //     //     success: function (response) {
                                //     //         $("#detailtext").html(response);
                                //     //     }
                                //     // });
                                // }
                                // else
                                // {
                                //     $.ajax({
                                //         type: "GET",
                                //         url: "/task/showTaskDetail?id="+id_task,
                                //         data: {"id":JSON.stringify(id_task)},
                                //         dataType: "json",
                                //         success: function (response) {
                                //
                                //             var text = "";
                                //             for (var i = 0; i < response.length; i++)
                                //             {
                                //                 if (response[i].star == 0)
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 else
                                //                 {
                                //                     let a = `
                                //         <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                //             <div class="tasklist-iconn">
                                //                 <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                //                 <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                //             </div>
                                //             <form action="/task/update" method="PUT"  id="edit_task">
                                //                 <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                //                 <input type="submit" class="none">
                                //             </form>
                                //         </div>
                                //         <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                //         <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                //     `;
                                //                     text += a;
                                //                 }
                                //                 $("#detailtext").html(text);
                                //             }
                                //         }
                                //     });
                                //
                                //     // $.ajax({
                                //     //     type: "post",
                                //     //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                                //     //     data: {"id_task":id_task , "id_list":id_list},
                                //     //     dataType: "html",
                                //     //     success: function (response) {
                                //     //         $("#detailtext").html(response);
                                //     //         $(".task-check-title").addClass("none");
                                //     //         $(".task-checked1-title").addClass("block");
                                //     //     }
                                //     // });
                                // }
                            }
                        });
                    });

                    // Enter edit Task
                    $('body').on('submit' , '#edit_task' , function(e)
                    {
                        e.preventDefault();

                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");

                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_350).html(title_task);
                            }
                        });
                    });
                    $('body').on('mouseleave' , '#edit_task' , function(e)
                    {
                        e.preventDefault();

                        var title_task = $(this).children().eq(0).val();
                        var id_task = $(this).parent().attr("id_task");

                        var form = $(this);
                        $.ajax({
                            type: form.attr("method"),
                            url: form.attr("action"),
                            data: {"id_task":id_task , "title_task":title_task},
                            dataType: "html",
                            success: function (response) {
                                form.children().eq(0).val(title_task);
                                $(global_350).html(title_task);
                            }
                        });
                    });

                // due date

                    //show
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            // $(".op1").html(response);
                            var text ="";
                            for ( var i = 0; i < response.length; i++)
                            {
                                if (response[i].duedate == 0)
                                {
                                    let a = `
                                        <form style="display: flex;" action="/task/update" method="PUT" id="form_duedate" id_task="`+id_task+`">
                                            <div class="section-icon"><svg class="date" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="date"> <path d="M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M8.5,12 C7.68,12 7,11.32 7,10.5 L7,9.5 C7,8.68 7.68,8 8.5,8 C9.32,8 10,8.68 10,9.5 L10,10.5 C10,11.32 9.32,12 8.5,12 L8.5,12 Z M5.5,11 C5.22,11 5,10.78 5,10.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,10.5 C6,10.78 5.78,11 5.5,11 L5.5,11 Z M8.5,9 C8.22,9 8,9.22 8,9.5 L8,10.5 C8,10.78 8.22,11 8.5,11 C8.78,11 9,10.78 9,10.5 L9,9.5 C9,9.22 8.78,9 8.5,9 L8.5,9 Z M11.5,11 C11.22,11 11,10.78 11,10.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,10.5 C12,10.78 11.78,11 11.5,11 L11.5,11 Z M14.5,11 C14.22,11 14,10.78 14,10.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,10.5 C15,10.78 14.78,11 14.5,11 L14.5,11 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,13.5 C5,13.22 5.22,13 5.5,13 C5.78,13 6,13.22 6,13.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,13.5 C8,13.22 8.22,13 8.5,13 C8.78,13 9,13.22 9,13.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,13.5 C11,13.22 11.22,13 11.5,13 C11.78,13 12,13.22 12,13.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,13.5 C14,13.22 14.22,13 14.5,13 C14.78,13 15,13.22 15,13.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z"></path> </g> </g> </svg></div>
                                            <div class="section-text">
                                                <input type="date" name="date" value="">
                                                <input class="plus-cln-text-input-none" name="duedate_id" type="text" value="`+id_task+`">
                                                <input type="submit" class="none">
                                            </div>
                                        </form>
                                        `
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <form style="display: flex;" action="/task/update" method="PUT" id="form_duedate" id_task="`+id_task+`">
                                            <div class="section-icon"><svg class="date" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="date"> <path d="M2.5,7 C2.22,7 2,6.78 2,6.5 L2,3.5 C2,2.68 2.68,2 3.5,2 L16.5,2 C17.32,2 18,2.68 18,3.5 L18,6.5 C18,6.78 17.78,7 17.5,7 L2.5,7 Z M3,6 L17,6 L17,3.5 C17,3.22 16.78,3 16.5,3 L3.5,3 C3.22,3 3,3.22 3,3.5 L3,6 Z M3.5,18 C2.68,18 2,17.32 2,16.5 L2,8.5 C2,8.22 2.22,8 2.5,8 C2.78,8 3,8.22 3,8.5 L3,16.5 C3,16.78 3.22,17 3.5,17 L16.5,17 C16.78,17 17,16.78 17,16.5 L17,8.5 C17,8.22 17.22,8 17.5,8 C17.78,8 18,8.22 18,8.5 L18,16.5 C18,17.32 17.32,18 16.5,18 L3.5,18 Z M8.5,12 C7.68,12 7,11.32 7,10.5 L7,9.5 C7,8.68 7.68,8 8.5,8 C9.32,8 10,8.68 10,9.5 L10,10.5 C10,11.32 9.32,12 8.5,12 L8.5,12 Z M5.5,11 C5.22,11 5,10.78 5,10.5 L5,9.5 C5,9.22 5.22,9 5.5,9 C5.78,9 6,9.22 6,9.5 L6,10.5 C6,10.78 5.78,11 5.5,11 L5.5,11 Z M8.5,9 C8.22,9 8,9.22 8,9.5 L8,10.5 C8,10.78 8.22,11 8.5,11 C8.78,11 9,10.78 9,10.5 L9,9.5 C9,9.22 8.78,9 8.5,9 L8.5,9 Z M11.5,11 C11.22,11 11,10.78 11,10.5 L11,9.5 C11,9.22 11.22,9 11.5,9 C11.78,9 12,9.22 12,9.5 L12,10.5 C12,10.78 11.78,11 11.5,11 L11.5,11 Z M14.5,11 C14.22,11 14,10.78 14,10.5 L14,9.5 C14,9.22 14.22,9 14.5,9 C14.78,9 15,9.22 15,9.5 L15,10.5 C15,10.78 14.78,11 14.5,11 L14.5,11 Z M5.5,15 C5.22,15 5,14.78 5,14.5 L5,13.5 C5,13.22 5.22,13 5.5,13 C5.78,13 6,13.22 6,13.5 L6,14.5 C6,14.78 5.78,15 5.5,15 L5.5,15 Z M8.5,15 C8.22,15 8,14.78 8,14.5 L8,13.5 C8,13.22 8.22,13 8.5,13 C8.78,13 9,13.22 9,13.5 L9,14.5 C9,14.78 8.78,15 8.5,15 L8.5,15 Z M11.5,15 C11.22,15 11,14.78 11,14.5 L11,13.5 C11,13.22 11.22,13 11.5,13 C11.78,13 12,13.22 12,13.5 L12,14.5 C12,14.78 11.78,15 11.5,15 L11.5,15 Z M14.5,15 C14.22,15 14,14.78 14,14.5 L14,13.5 C14,13.22 14.22,13 14.5,13 C14.78,13 15,13.22 15,13.5 L15,14.5 C15,14.78 14.78,15 14.5,15 L14.5,15 Z"></path> </g> </g> </svg></div>
                                            <div class="section-text">
                                                <input type="date" name="date" value="`+response[i].duedate+`">
                                                <input class="plus-cln-text-input-none" name="duedate_id" type="text" value="`+id_task+`">
                                                <input type="submit" class="none">
                                            </div>
                                        </form>
                                        `
                                    text += a;
                                }
                            }
                            $(".op1").html(text);
                        }
                    });

                    //Enter to add duedate
                        $('body').on('submit' , '#form_duedate' , function(e)
                        {
                            var d = new Date();

                            var month = d.getMonth()+1;
                            var day = d.getDate();

                            var current_date = d.getFullYear() + '-' +
                                (month<10 ? '0' : '') + month + '-' +
                                (day<10 ? '0' : '') + day;

                            e.preventDefault();

                            id_task = $(this).attr("id_task");
                            duedate = $(this).children().eq(1).children().eq(0).val();
                            var date = new Date(duedate);
                            var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                            form = $(this);

                            $.ajax({
                                type: "PUT",
                                url: "/task/updateDuedate?id="+id_task,
                                data: {"duedate":JSON.stringify(duedate)},
                                dataType: "json",
                                success: function (response) {

                                    if(duedate >= current_date)
                                    {
                                        onduedate.html(format_duedate);
                                        overduedate.html('');
                                    }
                                    else
                                    {
                                        overduedate.html(format_duedate);
                                        onduedate.html('');
                                    }
                                }
                            });
                        });
                        // $('body').on('mouseleave' , '#form_duedate' , function(e)
                        // {
                        //     var d = new Date();
                        //
                        //     var month = d.getMonth()+1;
                        //     var day = d.getDate();
                        //
                        //     var current_date = d.getFullYear() + '-' +
                        //         (month<10 ? '0' : '') + month + '-' +
                        //         (day<10 ? '0' : '') + day;
                        //
                        //         e.preventDefault();
                        //
                        //         var id_task = $(this).attr("id_task");
                        //         var duedate = $(this).children().eq(0).children().eq(0).val();
                        //         var date = new Date(duedate);
                        //         var format_duedate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
                        //
                        //
                        //         form = $(this);
                        //
                        //         $.ajax({
                        //         type: "PUT",
                        //         url: "/task/updateDuedate?id="+id_task,
                        //         data: {"duedate":JSON.stringify(duedate)},
                        //         dataType: "json",
                        //         success: function (response) {
                        //
                        //             if(duedate >= current_date)
                        //             {
                        //                 onduedate.html(format_duedate);
                        //                 overduedate.html('');
                        //             }
                        //             else
                        //             {
                        //                 overduedate.html(format_duedate);
                        //                 onduedate.html('');
                        //             }
                        //         }
                        //     });
                        // });

                // reminder

                // show
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            // $(".op2").html(response);
                            var text="";
                            for ( var i = 0; i < response.length; i++)
                            {
                                if(response[i].reminder == 0)
                                {
                                    let a = `
                                        <div class="reminder-icon"><svg class="reminder" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="reminder"> <path d="M3.26,6.6 C3.1,6.24 3,5.88 3,5.5 C3,4.12 4.12,3 5.5,3 C6.04,3 6.54,3.18 6.98,3.5 C7.2,3.66 7.52,3.62 7.68,3.4 C7.86,3.18 7.8,2.86 7.58,2.7 C6.98,2.24 6.24,2 5.5,2 C3.58,2 2,3.58 2,5.5 C2,6.02 2.12,6.54 2.38,7.04 C2.46,7.22 2.64,7.32 2.82,7.32 C2.9,7.32 2.98,7.3 3.04,7.28 C3.3,7.14 3.4,6.84 3.26,6.6 L3.26,6.6 Z M14.5,2 C13.76,2 13.04,2.24 12.42,2.7 C12.2,2.86 12.16,3.18 12.32,3.4 C12.48,3.62 12.8,3.66 13.02,3.5 C13.46,3.18 13.98,3 14.5,3 C15.88,3 17,4.12 17,5.5 C17,5.88 16.92,6.24 16.74,6.6 C16.62,6.84 16.72,7.14 16.96,7.28 C17.04,7.3 17.1,7.32 17.18,7.32 C17.36,7.32 17.54,7.22 17.64,7.04 C17.88,6.54 18,6.02 18,5.5 C18,3.58 16.44,2 14.5,2 L14.5,2 Z M17,11 C17,7.14 13.86,4 10,4 C6.14,4 3,7.14 3,11 C3,13 3.84,14.82 5.2,16.1 L4.14,17.14 C3.96,17.34 3.96,17.66 4.14,17.86 C4.24,17.96 4.38,18 4.5,18 C4.62,18 4.76,17.96 4.86,17.86 L5.98,16.72 C7.12,17.52 8.5,18 10,18 C11.5,18 12.88,17.52 14.02,16.72 L15.14,17.86 C15.24,17.96 15.38,18 15.5,18 C15.62,18 15.76,17.96 15.86,17.86 C16.04,17.66 16.04,17.34 15.86,17.14 L14.8,16.1 C16.16,14.82 17,13 17,11 L17,11 Z M4,11 C4,7.7 6.7,5 10,5 C13.3,5 16,7.7 16,11 C16,14.3 13.3,17 10,17 C6.7,17 4,14.3 4,11 L4,11 Z M10.5,7 C10.22,7 10,7.22 10,7.5 L10,11 L7.46,11 C7.2,11 6.96,11.22 6.96,11.5 C6.96,11.78 7.2,12 7.46,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,7.5 C11,7.22 10.78,7 10.5,7 L10.5,7 Z" id="…"></path> </g> </g> </svg></div>
                                            <form action="/task/updateReminder" method="PUT" id="form_reminder" id_task='`+id_task+`'>
                                                <div class="section-text">
                                                    <input type="time" name="time" value="">
                                                    <input type="submit" class="none">
                                                </div>
                                            </form>
                                        `
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <div class="reminder-icon"><svg class="reminder" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="reminder"> <path d="M3.26,6.6 C3.1,6.24 3,5.88 3,5.5 C3,4.12 4.12,3 5.5,3 C6.04,3 6.54,3.18 6.98,3.5 C7.2,3.66 7.52,3.62 7.68,3.4 C7.86,3.18 7.8,2.86 7.58,2.7 C6.98,2.24 6.24,2 5.5,2 C3.58,2 2,3.58 2,5.5 C2,6.02 2.12,6.54 2.38,7.04 C2.46,7.22 2.64,7.32 2.82,7.32 C2.9,7.32 2.98,7.3 3.04,7.28 C3.3,7.14 3.4,6.84 3.26,6.6 L3.26,6.6 Z M14.5,2 C13.76,2 13.04,2.24 12.42,2.7 C12.2,2.86 12.16,3.18 12.32,3.4 C12.48,3.62 12.8,3.66 13.02,3.5 C13.46,3.18 13.98,3 14.5,3 C15.88,3 17,4.12 17,5.5 C17,5.88 16.92,6.24 16.74,6.6 C16.62,6.84 16.72,7.14 16.96,7.28 C17.04,7.3 17.1,7.32 17.18,7.32 C17.36,7.32 17.54,7.22 17.64,7.04 C17.88,6.54 18,6.02 18,5.5 C18,3.58 16.44,2 14.5,2 L14.5,2 Z M17,11 C17,7.14 13.86,4 10,4 C6.14,4 3,7.14 3,11 C3,13 3.84,14.82 5.2,16.1 L4.14,17.14 C3.96,17.34 3.96,17.66 4.14,17.86 C4.24,17.96 4.38,18 4.5,18 C4.62,18 4.76,17.96 4.86,17.86 L5.98,16.72 C7.12,17.52 8.5,18 10,18 C11.5,18 12.88,17.52 14.02,16.72 L15.14,17.86 C15.24,17.96 15.38,18 15.5,18 C15.62,18 15.76,17.96 15.86,17.86 C16.04,17.66 16.04,17.34 15.86,17.14 L14.8,16.1 C16.16,14.82 17,13 17,11 L17,11 Z M4,11 C4,7.7 6.7,5 10,5 C13.3,5 16,7.7 16,11 C16,14.3 13.3,17 10,17 C6.7,17 4,14.3 4,11 L4,11 Z M10.5,7 C10.22,7 10,7.22 10,7.5 L10,11 L7.46,11 C7.2,11 6.96,11.22 6.96,11.5 C6.96,11.78 7.2,12 7.46,12 L10.5,12 C10.78,12 11,11.78 11,11.5 L11,7.5 C11,7.22 10.78,7 10.5,7 L10.5,7 Z" id="…"></path> </g> </g> </svg></div>
                                            <form action="/task/updateReminder" method="PUT" id="form_reminder" id_task='`+id_task+`'>
                                                <div class="section-text">
                                                    <input type="time" name="time" value="`+response[i].reminder+`">
                                                    <input type="submit" class="none">
                                                </div>
                                            </form>
                                        `
                                    text += a;
                                }
                            }
                            $(".op2").html(text);
                        }
                    });

                    // Enter to add reminder
                    $("body").on('submit' , "#form_reminder" , function(e)
                    {
                        e.preventDefault();

                        var id_task = $(this).attr("id_task");
                        var reminder = $(this).children().eq(0).children().eq(0).val();

                        var form = $(this);

                        $.ajax({
                            type: "PUT",
                            url: "/task/updateReminder?id="+id_task,
                            data: {"reminder":JSON.stringify(reminder)},
                            dataType: "json",
                            success: function (response) {
                                cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                                cln.children().eq(1).children().eq(1).html(response);
                            }
                        });
                    });
                    // $("body").on('mouseleave' , "#form_reminder" , function(e)
                    // {
                    //     e.preventDefault();
                    //
                    //     var id_task = $(this).attr("id_task");
                    //     var reminder = $(this).children().eq(0).children().eq(0).val();
                    //
                    //     var form = $(this);
                    //
                    //     $.ajax({
                    //         type: "PUT",
                    //         url: "/task/updateReminder?id="+id_task,
                    //         data: {"reminder":JSON.stringify(reminder)},
                    //         dataType: "json",
                    //         success: function (response) {
                    //             cln = $(".reminder1:first").clone().appendTo(".noti-hover");
                    //             cln.children().eq(1).children().eq(1).html(response);
                    //         }
                    //     });
                    // });

                // Subtask

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                // file

                    // show
                    $.ajax({
                    type: "GET",
                    url: "/file/showbyTaskID?task_id="+id_task,
                    data: {"id":JSON.stringify(id_task)},
                    dataType: "json",
                    success: function (response) {
                        var text = "";
                        for ( var i = 0; i < response.length; i++)
                        {
                            date = new Date(response[i].createdate)

                            let a = `
                                    <div class="file-list-layout">               
                                        <div class="file-list-content" date_create="`+date.toLocaleString()+`">                                         
                                                <div class="file-list-content-icon"><img width="40" height="40" src="upload/`+response[i].title+`" alt=""></div>
                                                <div class="file-list-content-text">
                                                    <a href="upload/`+response[i].title+`"><div class="file-list-content-text-imgname">`+response[i].title+`</div></a>
                                                    <div class="file-list-content-text-time">
                                                        <img src="../image/text.png" style="border-radius:50%;" width="15" height="15" alt="">
                                                        <div class="file-list-content-text-timetext">`+date.toLocaleString()+`</div>
                                                        <div class="file-remove">x</div>
                                                    </div>
                                                </div>                           
                                        </div>                       
                                    </div>
                                `
                            text +=a;
                        }
                        $(".file-list").html(text);
                    }
                });

                // Comment

                    // show
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                //date create
                   //show
                   $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                    data: {"id_task":id_task},
                    dataType: "html",
                    success: function (response) {
                        $(".datetime").html(response);
                    }
                });
            });

            //dbl click show right
            $('body').on('dblclick' , '.tasklist-text' , function()
            {
                $(".right").css("width","367px");
                $(".middle").css("margin-right","367px");
            });

            $('body').on('dblclick' , '.task-deleted-text1' , function()
            {
                $(".right").css("width","367px");
                $(".middle").css("margin-right","367px");
            });

        // ENTER to ADD TASK on id="form_Task"
        $("#form_Task").submit(function (e)
        {
            e.preventDefault();
            // to-do-add
             title_task = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            // to-do-add-none
            var id_list = $(this).children().eq(0).children().eq(2).children().eq(0).val();

            var form = $(this);
            if($.trim($("#input-add-task").val()) != '')
            {
                $.ajax({
                    type: "POST",
                    url: "/task/add/?list_id="+id_list,
                    data: {"title":JSON.stringify(title_task)},
                    dataType: "json",
                    success: function (response) {
                        cln = $(".tasklist-body:first").clone().appendTo(".task-list");
                        cln.children().eq(1).html(title_task);
                        $("#input-add-task").val('');
                        attr = cln.children().eq(1).attr("id_task",response.id);
                        attr_origin = cln.attr("id_task",response.id);
                    }
                });
            }

        });

        //Mark as Completed
        $("body").on('click' , '.task-check' , function()
        {

            var local = $(this).parent().parent().parent();

            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            status = $(this).parent().parent().parent().attr("status");
            condition = $(this).parent().parent().parent().attr("condition");

            $.ajax({
                type: "PUT",
                url: "/task/markAsCompleted?status=1&id="+id_task,
                data: {"status":JSON.stringify(status)},
                dataType: "json",
                success: function (response) {
                    $(local).hide();
                    $(".task-deleted").load("task/getTaskByListID/?list_id="+id_list+"&status=1",function()
                    {
                        $.ajax({
                            type: "GET",
                            url: "task/getTaskByListID/?list_id="+id_list+"&status=1",
                            data: {"id": JSON.stringify(id_list)},
                            dataType: "json",   // datatype to receive
                            success: function (response)
                            {
                                //for search
                                $(".task-deleted").show();
                                $(".to-dos").show();

                                // show task
                                var text1 = "";

                                for (var i =0;i<response.length;i++) {
                                    var date = new Date(response[i].createdate);

                                    if (response[i].star == 0)
                                    {
                                        let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check"style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                        text1 += b;
                                    }
                                    else
                                    {
                                        let b = `
                                <div class="task-list-Completed">
                                    <div class="tasklist-all">
                                        <div class="tasklist-body" id="tasklist-body1" id_list="` + id_list + `" id_task="` + response[i].id + `" starred="1" star="0" status="` + response[i].status + `">
                                            <div class="tasklist-icon">
                                                <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path></g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path>.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <div class="task-deleted-text1" id_task="` + response[i].id + `" id_list="` + id_list + `">
                                                <!-- <a href="hienthi.php?id_task='.$task_row['id'].'&id_list='.$list_id.'">  -->

                                                <div class="task-deleted-text" style="text-decoration: line-through">` + response[i].title + `   </div>
                                                    <div class="task-deleted-text2">` + date.toLocaleString() + `</div>
                                                <!-- </a> -->
                                            </div>
                                            <div class="duedate">
                                                <!-- // show duedate -->
                                                <div class="onduedate">
                                                </div>
                                                <div class="over_duedate">
                                                </div>
                                            </div>
                                            <div class="tasklist-staricon-father">
                                                <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">.' <g>.' <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                <div  title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                                        text1 += b;
                                    }

                                }
                                $(".task-deleted").html(text1);

                            }
                        });
                    });

                    //show title
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {

                            var text = "";
                            for (var i = 0; i < response.length; i++)
                            {
                                if (response[i].star == 0)
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                $("#detailtext").html(text);
                            }
                        }
                    }); // done with java

                    //show duedate
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    // show reminder
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 224
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });

                    // show subtask
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                    // show file
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    });

                    // show comment
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                    //show  date create
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".datetime").html(response);
                        }
                    });
                }
            });
        });

        //Mark as Uncompleted
        $("body").on('click' , '.task-checked1' , function()
        {
            global_739 =  $(this).parent().parent().parent();

            //attr of tasklist-body on Completed
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            status = $(this).parent().parent().parent().attr("status");
            condition = $(this).parent().parent().parent().attr("condition");


            $.ajax({
                type: "PUT",
                url: "/task/markAsUncompleted?status=0&id="+id_task,
                data: {"status":JSON.stringify(status)},
                dataType: "html",
                success: function (response) {
                    $(".task-list").load("task/getTaskByListID/?list_id="+id_list+"&status=0",function()
                    {
                        $.ajax({
                            type: "GET",
                            url: "task/getTaskByListID/?list_id="+id_list+"&status=0",
                            data: {"id": JSON.stringify(id_list)},
                            dataType: "json",   // datatype to receive
                            success: function (response)
                            {
                                //for search
                                $(".task-deleted").show();
                                $(".to-dos").show();

                                // show task
                                var text = "";
                                for (var i =0;i < response.length;i++) {
                                    var date = new Date(response[i].createdate);

                                    if (response[i].star == 0)
                                    {
                                        let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: block" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: none" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                        text += a;
                                    }
                                    else
                                    {
                                        let a = `
                                        <div class="tasklist-all">
                                            <div class="tasklist-body" id="tasklist-body1" condition="0" id_list="` + id_list + `" id_task="` + response[i].id + `" status="` + response[i].status + `" starred="1" star="0">
                                                <div class="tasklist-icon">
                                                    <span title="Mark as Completed"><svg class="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg></span>
                                                    <span title="Mark as Not Completed"><svg class="task-checked1" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004">'.'</path>'.' <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                                </div>
                                                <div class="tasklist-text" id_task="` + response[i].id + `" id_list="`+id_list+`" date_create="` + date.toLocaleString() + `"> 
            <!--                                    \`+response[i].date+\`-->
                                                    <div class="task-list-text-child">` + response[i].title + `</div>
                                                    <div class="task-deleted-text11">
                                                        <div class="task-deleted-text22"></div>
                                                    </div>
                                                </div>
                                                <div class="duedate">
                                                    <div class="onduedate">
                                                    </div>
                                                    <div class="over_duedate">
                                                    </div>
                                                    <div id="timeout"></div>
                                                </div>
                                                <div class="tasklist-staricon-father">
                                                    <div  title="Mark as Starred"><svg class="tasklist-staricon" style="display: none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http:www.w3.org/2000/svg" xmlns:xlink="http:www.w3.org/1999/xlink" xml:space="preserve">. <g>. <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                                    <div title="Mark as Unstarred"><svg class="tasklist-staricon-check" style="display: block " width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">.' <g>.' <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>                                                  
                                                </div>
                                            </div>
                                        </div>`;
                                        text += a;
                                    }

                                }
                                $(".task-list").html(text);
                            }
                        });
                    });
                    $(global_739).hide();

                    // show title
                    $.ajax({
                        type: "GET",
                        url: "/task/showTaskDetail?id="+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {
                            var text = "";
                            for (var i = 0; i < response.length; i++)
                            {
                                if (response[i].star == 0)
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                else
                                {
                                    let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=1 starred=0>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                    text += a;
                                }
                                $("#detailtext").html(text);
                            }
                        }
                    }); // done with java

                    //show duedate
                     $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-duedate.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op1").html(response);
                        }
                    });

                    // show reminder
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-reminder.php",
                        data: {"id_task":id_task},  //line 225
                        dataType: "html",
                        success: function (response) {
                            $(".op2").html(response);
                        }
                    });

                    // show subtask
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-subtask.php",
                        data: {"id_task":id_task},  // line 225
                        dataType: "html",
                        success: function (response) {
                            $(".plus-cln-father").html(response);
                        }
                    });

                    // show file
                    $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-file.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".file-list").html(response);
                        }
                    });

                     // show comment
                     $.ajax({
                        type: "POST",
                        url: "http://localhost/Hung-Tran-master/php/Process/show-comment.php",
                        data: {"id_task":id_task},
                        dataType: "html",
                        success: function (response) {
                            $(".comment-father").html(response);
                        }
                    });

                    //show  date create
                    $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/show_createdate_Task.php",
                    data: {"id_task":id_task},
                    dataType: "html",
                    success: function (response) {
                        $(".datetime").html(response);
                    }
                });
                }
            });
        });

        //Mark as Starred
        $("body").on('click' , '.tasklist-staricon' , function()
        {
            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            // status = $(this).parent().parent().parent().attr("status");
            star = $(this).parent().parent().parent().attr("starred");
            condition = $(this).parent().parent().parent().attr("condition");

            $(this).hide();
            this_sibblings = $(this).parent().parent().children().eq(1).children().eq(0);
            $(this_sibblings).toggle(".block");

            $.ajax({
                type: "PUT",
                url: "/task/markAsStarred?star=1&id="+id_task,
                data: {"star":JSON.stringify(star)},
                dataType: "json",
                success: function (response) {

                    if(condition == 0)
                    {
                        $.ajax({
                            type: "GET",
                            url: "/task/showTaskDetail?id="+id_task,
                            data: {"id":JSON.stringify(id_task)},
                            dataType: "json",
                            success: function (response) {
                                var text = "";
                                for (var i = 0; i < response.length; i++)
                                {
                                    if (response[i].star == 0)
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    else
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    $("#detailtext").html(text);
                                }
                            }
                        });
                        // $.ajax({
                        //     type: "post",
                        //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                        //     data: {"id_task":id_task , "id_list":id_list},
                        //     dataType: "html",
                        //     success: function (response) {
                        //         $("#detailtext").html(response);
                        //     }
                        // });
                    }
                    else
                    {
                        $.ajax({
                            type: "GET",
                            url: "/task/showTaskDetail?id="+id_task,
                            data: {"id":JSON.stringify(id_task)},
                            dataType: "json",
                            success: function (response) {

                                var text = "";
                                for (var i = 0; i < response.length; i++)
                                {
                                    if (response[i].star == 0)
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    else
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    $("#detailtext").html(text);
                                }
                            }
                        });

                        // $.ajax({
                        //     type: "post",
                        //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                        //     data: {"id_task":id_task , "id_list":id_list},
                        //     dataType: "html",
                        //     success: function (response) {
                        //         $("#detailtext").html(response);
                        //         $(".task-check-title").addClass("none");
                        //         $(".task-checked1-title").addClass("block");
                        //     }
                        // });
                    }
                }
            });
        });

        //Mark as Unstarred
        $("body").on('click' , '.tasklist-staricon-check' , function()
        {
            global = $(this).parent().parent().parent();

            // attr of tasklist-body
            id_list = $(this).parent().parent().parent().attr("id_list");
            id_task = $(this).parent().parent().parent().attr("id_task");
            status = $(this).parent().parent().parent().attr("status");
            star = $(this).parent().parent().parent().attr("star");
            condition = $(this).parent().parent().parent().attr("condition");

            $(this).hide();
            this_sibblings = $(this).parent().parent().children().eq(0).children().eq(0);
            $(this_sibblings).toggle(".star-none");

            $.ajax({
                type: "PUT",
                url: "/task/markAsUnStarred?star=0&id="+id_task,
                data: {"star":JSON.stringify(star)},
                dataType: "json",
                success: function (response) {



                    if(condition == 0)
                    {
                        $.ajax({
                            type: "GET",
                            url: "/task/showTaskDetail?id="+id_task,
                            data: {"id":JSON.stringify(id_task)},
                            dataType: "json",
                            success: function (response) {
                                var text = "";
                                for (var i = 0; i < response.length; i++)
                                {
                                    if (response[i].star == 0)
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    else
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    $("#detailtext").html(text);
                                }
                            }
                        });
                        // $.ajax({
                        //     type: "post",
                        //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Uncompleted.php",
                        //     data: {"id_task":id_task , "id_list":id_list},
                        //     dataType: "html",
                        //     success: function (response) {
                        //         $("#detailtext").html(response);
                        //     }
                        // });
                    }
                    else
                    {
                        $.ajax({
                            type: "GET",
                            url: "/task/showTaskDetail?id="+id_task,
                            data: {"id":JSON.stringify(id_task)},
                            dataType: "json",
                            success: function (response) {

                                var text = "";
                                for (var i = 0; i < response.length; i++)
                                {
                                    if (response[i].star == 0)
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    else
                                    {
                                        let a = `
                                        <div class="status-father" id_list='`+id_list+`' id_task='`+id_task+`' status=1 unstatus=0 star=0 starred=1>
                                            <div class="tasklist-iconn">
                                                <span title="Mark as Completed"><svg class="task-check-title none" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g></svg></span>
                                                <span title="Mark as Not Completed"><svg class="task-checked1-title block" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path><path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path></g></svg></span>
                                            </div>
                                            <form action="/task/update" method="PUT"  id="edit_task">
                                                <input class="task_input_text" name="task_input" type="text" value="`+response[i].title+`">
                                                <input type="submit" class="none">
                                            </form>
                                        </div>
                                        <div title="Mark as Starred"><svg class="tasklist-staricon-title star-none" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g><path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path></g></svg></div>
                                        <div title="Mark as Unstarred"><svg class="tasklist-staricon-check-title block" width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><g><path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path></g></svg></div>
                                    `;
                                        text += a;
                                    }
                                    $("#detailtext").html(text);
                                }
                            }
                        });

                        // $.ajax({
                        //     type: "post",
                        //     url: "http://localhost/Hung-Tran-master/php/Process/showTaskDetail_Completed.php",
                        //     data: {"id_task":id_task , "id_list":id_list},
                        //     dataType: "html",
                        //     success: function (response) {
                        //         $("#detailtext").html(response);
                        //         $(".task-check-title").addClass("none");
                        //         $(".task-checked1-title").addClass("block");
                        //     }
                        // });
                    }
                }
            });
        });

        //Delete Task
        $("body").on('contextmenu' ,'.tasklist-body', function(e){
                
                global = $(this);
                e.preventDefault();
                $(".tasklist-menu").toggle();
                $(".tasklist-menu").css({left:e.pageX, top:e.pageY});

                //id of task
                id_task = $(this).attr("id_task");
                var title_task = $(this).children().eq(1).html();

                // pass title_task to delete-layout1
                $(".delete-layout-content1-text11").html(title_task);

                // click ".TLmenu11" to show delete layout
                $("body").on('click', '.TLmenu11' , function()
                {
                    $(".delete-layout1").show(); // delete layout of task
                    $(".tasklist-menu").hide();
                });

                // click ".BD2" to delete task 
                $("body").on('click' , '.BD2' , function()
                {
                    $(global).remove();
                    $.ajax({
                        type: "DELETE",
                        url: "/task/delete/"+id_task,
                        data: {"id":JSON.stringify(id_task)},
                        dataType: "json",
                        success: function (response) {

                        }
                    });

                    // close deletelayout1
                    $(".delete-layout1").hide();
                });
        });

    // SUBTASK

        // add subtask
        $("body").on('submit' , '#form_subtask' , function(e)
        {
            e.preventDefault();

            var title_subtask = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            var id_task = $(this).attr("id_task");
            
            var form = $(this);

            if($.trim($("#themop3").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_subtask":title_subtask},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
                        cln.children().eq(1).children().eq(0).children().eq(0).val(title_subtask);
                        $("#themop3").val('');
                        attr_origin = cln.attr("id",response);
                    }
                });
            }
            
        });

        $("body").on('mouseleave' , '#form_subtask' , function(e)
        {
            e.preventDefault();
          
            var title_subtask = $(this).children().eq(0).children().eq(1).children().eq(0).val();
            var id_task = $(this).attr("id_task");
            
            var form = $(this);
                        
            if($.trim($("#themop3").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_subtask":title_subtask},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".plus-cln:first").clone().appendTo(".plus-cln-father");
                        cln.children().eq(1).children().eq(0).children().eq(0).val(title_subtask);
                        $("#themop3").val('');
                        attr_origin = cln.attr("id",response);
                    }
                });
            }     
        });

        // update 
        $('body').on('submit' , ".form_subtask_update" , function(e)
        {
            e.preventDefault();
            
            var id_subtask = $(this).parent().attr("id");
            var title_subtask = $(this).children().eq(0).children().eq(0).val();
            var input_subtask = $(this).children().eq(0).children().eq(0);
            var form = $(this);

            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: {"id_subtask":id_subtask,"title_subtask":title_subtask},
                dataType: "html",
                success: function (response) {
                    $(input_subtask).val(title_subtask);
                }
            });
        });
        $('body').on('mouseleave' , ".form_subtask_update" , function(e)
        {
            e.preventDefault();
            
            var id_subtask = $(this).parent().attr("id");
            var title_subtask = $(this).children().eq(0).children().eq(0).val();
            var input_subtask = $(this).children().eq(0).children().eq(0);
            var form = $(this);

            $.ajax({
                type: form.attr("method"),
                url: form.attr("action"),
                data: {"id_subtask":id_subtask,"title_subtask":title_subtask},
                dataType: "html",
                success: function (response) {
                    $(input_subtask).val(title_subtask);
                }
            });
        });

        // delete
        $('body').on('click' , '.plus-cln-remove' , function()
        {
            global_835 = $(this).parent();
            
            // show delete layout subtask
            $(".delete-layout2").show();

            id_subtask = $(this).parent().attr("id");
            
            //pass title_subtask to layout
            var title_subtask = $(this).parent().children().eq(1).children().eq(0).children().eq(0).val();            
            $(".delete-layout-content1-text11").html(title_subtask);

            // click ".BD2" to delete subtask
            $('body').on('click', '.BD2' , function()
            {                
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-subtask.php",
                    data: {"id_subtask":id_subtask},
                    dataType: "html",
                    success: function (response) {
                        global_835.remove();
                        $(".delete-layout2").hide();
                    }
                });
            });
          
        });

        // check
        $('body').on('click' , '.task-checkplus' , function()
        {
            var id_subtask = $(this).parent().parent().attr('id');
            var check = $(this).parent().parent().attr('check');
                        
            $(this).hide();
            $(this).siblings().addClass("block");
            title_subtask = $(this).parent().parent().children().eq(1).children().eq(0).children().eq(0);

            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Checked-subtask.php",
                data: {"id_subtask":id_subtask,"check":check},
                dataType: "html",
                success: function (response) {
                    $(title_subtask).addClass("line-through");
                }
            });
        });

        // uncheck
        $('body').on('click' , '.task-checkedplus1' , function()
        {
            var id_subtask = $(this).parent().parent().attr('id');
            var uncheck = $(this).parent().parent().attr('uncheck');

            $(this).removeClass("block");
            $(this).siblings().show();
            title_subtask = $(this).parent().parent().children().eq(1).children().eq(0).children().eq(0);
           
            $.ajax({
                type: "POST",
                url: "http://localhost/Hung-Tran-master/php/Process/mark-as-Unchecked-subtask.php",
                data: {"id_subtask":id_subtask,"uncheck":uncheck},
                dataType: "html",
                success: function (response) {
                    $(title_subtask).removeClass("line-through");
                }
            });
        });

    // File 

        // add file
        // $('body').on('submit' , '#form_file' , function(e)
        // {
        //     e.preventDefault();
        //     var form = $(this);
        //     var data = form.serialize();
        //     id_task = $(this).attr("id_task");
        //     file = $(this).children().eq(0).children().eq(1).children().eq(0).val();
        //     file_format = file.replace("C:\\fakepath\\", "upload/");
        //     console.log(file_format);
        //
        //     $.ajax({
        //         type: "POST",
        //         enctype : "multipart/form-data",
        //         url: "/uploadOneFile?task_id="+id_task,
        //         data : {"title":JSON.stringify(file_format)},
        //         dataType: "json",
        //         success: function (response) {
        //
        //             cln = $(".file-list-layout:first").clone().appendTo(".file-list");
        //             cln.children().eq(0).children().eq(0).children().eq(0).attr("src", file_format);
        //             cln.children().eq(0).children().eq(1).children().eq(0).attr("href", file_format);
        //             cln.children().eq(0).children().eq(1).children().eq(0).children().eq(0).html(file_format);
        //             cln.children().eq(0).children().eq(1).children().eq(1).children().eq(1).html(response.createdate);
        //             cln.children().eq(0).attr("date_create",response.createdate);
        //         }
        //     });
        // });

        // delete file
        $('body').on('click' , '.file-remove' , function()
        {
            parent = $(this).parent().parent().parent().parent();

            // show layout
            $(".delete-layout4").show();

            date_create = $(this).parent().parent().parent().attr("date_create");
            console.log("TCL: date_create", date_create)
            
            // pass title to delete layout 4
            var title_file = $(this).parent().parent().children().eq(0).children().eq(0).html();
            $(".delete-layout-content1-text11").html(title_file);

            $('body').on('click' , ".BD2" , function()
            {
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-file.php",
                    data: {"date_create":date_create},
                    dataType: "html",
                    success: function (response) {
                        $(".delete-layout4").hide();
                        parent.hide();                       
                    }
                });
            });
           
            
        });
        
    // COMMENT
        
        // add comment
        $('body').on('submit' , '#form_comment' , function(e)
        {
            e.preventDefault();
            
            var id_task = $(this).attr("id_task");
            title_comment = $(this).children().eq(0).children().eq(0).children().eq(0).children().eq(0).val();
            var form = $(this);

            if($.trim($("#them2").val()) != '')
            {
                $.ajax({
                    type: form.attr("method"),
                    url: form.attr("action"),
                    data: {"id_task":id_task,"title_comment":title_comment},
                    dataType: "html",
                    success: function (response) {
                        cln = $(".comment:first").clone().appendTo(".comment-father");
                        cln.children().eq(1).children().eq(1).html(title_comment);
                        cln.children().eq(1).children().eq(0).children().eq(0).html(response);
                        $("#them2").val('');
                        cln.attr("date_create",response);
                    }
                }); 
            }
                     
        })

        // delete 
        $('body').on('click' , '.comment-text-icon' , function()
        {
            global_973 = $(this).parent();
            // show delete layout comment
            $(".delete-layout3").show();

            id_comment = $(this).parent().attr("date_create");
            console.log("TCL: id_comment", id_comment)
            
            //pass title_comment to layout
            var title_comment = $(this).parent().children().eq(1).children().eq(1);
            $(".delete-layout-content1-text11").html(title_comment);

            $('body').on('click', '.BD2' , function()
            { 
                $.ajax({
                    type: "POST",
                    url: "http://localhost/Hung-Tran-master/php/Process/delete-comment.php",
                    data: {"id_comment":id_comment},
                    dataType: "html",
                    success: function (response) {
                        global_973.remove();
                        $(".delete-layout3").hide();
                    }
                });
            });
        });

    // Search 
    $('body').on('submit' , '#search' , function(e)
    {
        e.preventDefault();
        
        var search_input = $(this).children().children().eq(0).val();
        var form = $(this);

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: {"search_input":search_input},
            dataType: "html",
            success: function (response) {
                $(".task-list").html(response);
                $(".task-deleted").hide();
                $(".to-dos").hide();
            }
        });
    });
});  
