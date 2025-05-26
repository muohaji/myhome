document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("post-form");
    const postList = document.getElementById("post-list");
    const contentInput = document.getElementById("post-content");

    if (!form || !postList || !contentInput) {
        console.error("필요한 요소를 찾을 수 없습니다.");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const content = contentInput.value.trim();

        if (content === "") {
            alert("내용을 입력해주세요.");
            return;
        }

        const li = document.createElement("li");
        li.className = "post";
        li.textContent = content;

        postList.prepend(li);

        form.reset();
    });
});