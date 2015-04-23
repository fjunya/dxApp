$(document).ready(function() {
    $("#add_button").click(function () {
        var id = $("#id").val();
        var memo = $("#memo").val();
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: "/dx/add_dx/",
            type: "POST",
            dataType: "html",
            cache: false,
            data: {
                "identifier": id,
                "memo": memo,
                "csrfmiddlewaretoken": csrf
            },
            success: function (data, textStatus) {
                // 成功したとき
                // data にサーバーから返された html が入る
                var json = $.parseJSON(data);
                if (json.result == "exist") {
                    alert("「" + id + "」は既に存在します。")
                } else if (json.result == 'ng') {
                    alert("識別IDは必須項目です。")
                } else {
                    alert("登録しました。")
                    window.location.href = '/dx/top/';
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                // エラー処理
            }
        });
    })

    $("#edit_button").click(function () {
        var edit_id = $('#edit_id').val();
        var edit_memo = $('#edit_memo').val();
        var targetDxId = $('#pk').val();
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: "/dx/edit_dx/",
            type: "POST",
            dataType: "html",
            cache: false,
            data: {
                "pk": targetDxId,
                "identifier": edit_id,
                "memo": edit_memo,
                "csrfmiddlewaretoken": csrf
            },
            success: function (data, textStatus) {
                // 成功したとき
                // data にサーバーから返された html が入る
                var json = $.parseJSON(data);
                if (json.result == "exist") {
                    alert("「" + id + "」は既に存在します。")
                } else if (json.result == 'ng') {
                    alert("識別IDは必須項目です。")
                } else {
                    alert("保存しました。")
                    window.location.href = '/dx/top/';
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                // エラー処理
            }
        });
    })

    $("#member_add").click(function () {
        var name = $("#name").val();
        var name_en = $("#name_en").val();
        var number = $("#number").val();
        var kana = $("#kana").val();
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: "/dx/add_member/",
            type: "POST",
            dataType: "html",
            cache: false,
            data: {
                "name": name,
                "name_en": name_en,
                "number": number,
                "kana": kana,
                "sort": 1000,
                "csrfmiddlewaretoken": csrf
            },
            success: function (data, textStatus) {
                // 成功したとき
                // data にサーバーから返された html が入る
                var json = $.parseJSON(data);
                if (json.result == "ng") {
                    alert("登録に失敗しました。")
                } else {
                    alert("登録しました。")
                    window.location.href = '/dx/member/';
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                // エラー処理
            }
        });
    })

    $("#room_add").click(function () {
        var name = $("#name").val();
        var name_en = $("#name_en").val();
        var number = $("#number").val();
        var kana = $("#kana").val();
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: "/dx/add_room/",
            type: "POST",
            dataType: "html",
            cache: false,
            data: {
                "name": name,
                "name_en": name_en,
                "number": number,
                "kana": kana,
                "csrfmiddlewaretoken": csrf
            },
            success: function (data, textStatus) {
                // 成功したとき
                // data にサーバーから返された html が入る
                var json = $.parseJSON(data);
                if (json.result == "ng") {
                    alert("登録に失敗しました。")
                } else {
                    alert("登録しました。")
                    window.location.href = '/dx/room/';
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                // エラー処理
            }
        });
    })
    $('tr[data-href]').addClass('clickable').click(function () {
        window.location = $(this).attr('data-href');
    })

    $('#modal_add').on('click', function () {
        $('#target_modal_add').modal();
    });

    $('[id=modal_edit]').on('click', function () {
        var dxId = this.getAttribute('dxId');
        var identifier = $("#identifier" + dxId).text();
        var memo = $("#memo" + dxId).text();
        $("#edit_id").val(identifier);
        $("#edit_memo").val(memo);
        $('#pk').val(dxId);

        $('#target_modal_edit').modal();
    });

    $('#add_button_folder').on('click', function () {
        var dxId = $('#dxId').attr('dxId');
        var folderId = $('#folderId').attr('folderId');
        var name = $('#name').val();
        var name_en = $('#name_en').val();
        var number = $('#number').val();
        var kana = $('#kana').val();
        var csrf = $('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: "/dx/add_folder/",
            type: "POST",
            dataType: "html",
            cache: false,
            data: {
                "dxId": dxId,
                "folderId": folderId,
                "name": name,
                "name_en": name_en,
                "number": number,
                "kana": kana,
                "csrfmiddlewaretoken": csrf
            },
            success: function (data, textStatus) {
                // 成功したとき
                // data にサーバーから返された html が入る
                var json = $.parseJSON(data);
                if (json.result == "ng") {
                    alert("登録に失敗しました。")
                } else {
                    alert("登録しました。")
                    if(folderId != ""){
                        window.location.href = '/dx/folder/' + dxId + "/" + folderId + "/";
                    }else{
                        window.location.href = '/dx/folder/' + dxId + "/";
                    }

                }
            },
            error: function (xhr, textStatus, errorThrown) {
                // エラー処理
            }
        });
    });
})

