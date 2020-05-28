$(document).ready(function() {
	$("#contact").validate({
		debug: true,
		errorClass:"alert alert-danger",
		errorLableContainer: "output-area",
		errorElement: "div",

		rules: {
			name: {
				required:true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 2000
			}
		},
		messages: {
			name: {
				required:"Name is required, please input a Name"
			},
			email: {
				required: "Email is required, please input an email address",
				email: "Invalid Email"
			},
			message: {
				required: "Please write a message in the message field",
				maxlength: "You've exceeded 2000 characters, please reduce your message"
			}
		},
		submitHandler: function (form) {
			$("#contact").ajaxSubmit({
				type: "POST",
				url: $("#contact").attr("action"),
				success: function (ajaxOutput) {
					$("#output-area").css("display", "");
					$("#output-area").html(ajaxOutput);

					if($(".alert-success").length >= 1) {
				$("#contact")[0].reset()
			}
				}
			})
		}
	});
});