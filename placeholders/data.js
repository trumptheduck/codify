data = [
    {
        name: '1.Console và console.log()',
        index:1,
        content: ` <p>Bài 1</p>
        <p>Để in giá trị ra console, ta dùng hàm:</p>
        <code class="language-js">console.log("value_to_print")</code><br>
        <p>Muốn mở console và chạy code, hãy ấn Open console để mở cửa sổ, và ấn Run</p>`
    },
    {
        name: '2.Các loại dữ liệu',
        index:2,
        content: ` <p>Bài 2</p>
        <p>Để khai báo biến, ta dùng </p>
        <code class="language-js">var variable_name</code><br>
        <code class="language-js">let variable_name</code><br>
        <code class="language-js">const constant_name</code><br>
        <p>Biến của Javascript không có loại, nên có thể nhận nhiều loại giá trị như String, Char, Int, Float...</p>
        <p>Hãy khai báo và in ra màn hình 4 loại biến: Char, Int, String, Float</p>`
        
    },
    {
        name: '3.Hàm, tham số và return',
        index:3,
        content: ` <p>Bài 3</p>
        <p>Để khai báo một hàm, ta dùng cú pháp sau</p>
        <code class="language-js">funtion ten_ham(tham_so) {
            //Noi dung cua ham
            return gia_tri_tra_ve;
        }</code><br>
        <p>Hàm có thể có hoặc không có return, nếu hàm không có return thì sẽ không trả về giá trị gì và ngược lại, hàm có return sẽ trả về giá trị đặt ở đằng sau return, gắn trực tiếp vào hàm</p>
        <code class="language-js">funtion ham1() {
            var a = 90;
            return a;
        }</code><br>
        <code class="language-js">funtion ham2() {
            var a = 90;
        }</code><br>
        <code class="language-js">console.log(ham1())//Log ra 90</code><br>
        <code class="language-js">console.log(ham2())//Log ra undefined, vi ham khong tra ve gia tri</code><br>
        `
    },
    {
        name: '4.Giới thiệu về Mảng và Object',
        index:4,
        content: ` <p>Bài 4</p>
        <p>Mảng và object được khai báo như sau:</p>
        <code class="language-js">var array = [1,2,3];</code><br>
        <code class="language-js">var object = {attr1: "Something", attr2: 69};</code><br>
        <p>Độ dài của mảng được truy cập như sau</p>
        <code class="language-js">array.length;//Ket qua la 3</code><br>
        <p>Các phần tử của mảng được truy cập qua index, tức là vị trí của phần tử trong mảng, từ trái qua phải, tính từ 0 đến hết mảng</p>
        <code class="language-js">array[0];//Dap an la 1</code><br>
        <code class="language-js">array[1];//Dap an la 2</code><br>
        <code class="language-js">array[2];//Dap an la 3</code><br>
        <p>Các thuộc tính của 1 object được truy cập như sau</p>
        <code class="language-js">object.attr1;//Dap an la "Something"</code><br>
        <code class="language-js">object.attr2;//Dap an la 69</code><br>
        `
    },
    {
        name: '5.If, For và các phép toán so sánh',
        index:5,
        content: ` <p>Bài 5</p>
        <p>Cú pháp vòng lặp for</p>
        <code class="language-js">for (let i = 0;i<10;i++) {/*Code lap lai*/}</code><br><br>
        <code class="language-js">for (khai bao i;dieu kien cua i;tang tien cua i) {/*Code lap lai*/}</code><br><br>
        <code class="language-js">if (dieukien) {/*Code ung voi dieu kien*/}</code><br><br>
        <code class="language-js">if (dieukien) {/*Code ung voi dieu kien*/} else {/*code khong ung voi dieu kien*/}</code><br><br>
        <code class="language-js">if (dieukien1) {/*Code ung voi dieu kien 1*/} else if (dieukien2) {/*Code ung voi dieu kien 2*/}</code><br><br>
        <code class="language-js">if (dieukien1) {/*Code ung voi dieu kien 1*/} else if (dieukien2) {/*Code ung voi dieu kien 2*/} else {/*code khong ung voi dieu kien nao*/}</code><br><br>
        <p>Các phép so sánh:</p>
        <p>Bằng nhau</p>
        <code class="language-js">a===b</code><br>
        <p> Lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng</p>
        <code class="language-js">a>b;</code><br>
        <code class="language-js">a<b;</code><br>
        <code class="language-js">a>=b;</code><br>
        <code class="language-js">a<=b</code><br>
        <p> Khác nhau</p>
        <code class="language-js">a!==b</code><br>
        <p>Điều kiện và/hoặc</p>
        <p>Và:</p>
        <code class="language-js">if (dieukien1&&dieukien2) {}</code><br>
        <p>Hoặc:</p>
        <code class="language-js">if (dieukien1||dieukien2) {}</code><br>
        `
    },
    {
        name: '6. Bài tập luyện tập Buổi 1',
        index:6,
        content: ` <p>Bài 6</p>
        <p>Cho một mảng chứa các học sinh như sau:</p>
        <code class="language-js">var danhsachHS = [
            {
                name: "Nguyen Thi Thuy",
                age: 16,
                class: "Lop 11",
                sex: "Nu"
            },
            {
                name: "Nguyen Van Huy",
                age: 23,
                class: "DT-05",
                sex: "Nam"
            },
            {
                name: "Tran Van Bang",
                age: 30,
                class: "Lua dao",
                sex: "Nam"
            },
            {
                name: "Vu Van Toan",
                age: 22,
                class: "KTVL-01",
                sex: "Nam"
            },
            {
                name: "Bui Viet Hoang",
                age: 4,
                class: "Lop 4 Tuoi",
                sex: "Nam"
            },
            {
                name: "Mai Van Khang",
                age: 10,
                class: "Di lam tho xay",
                sex: "Nam"
            },
            {
                name: "Que Thi Lan",
                age: 6,
                class: "Lop 1",
                sex: "Nu"
            },
            {
                name: "Mikami Yua",
                age: 69,
                class: "JAV-HD",
                sex: "Nu"
            },
            {
                name: "Dinh The Thanh",
                age: 21,
                class: "CNTT V-N-01",
                sex: "Nam"
            },
            {
                name: "Mai Thi Dieu Linh",
                age: 18,
                class: "CTTT",
                sex: "Nu"
            },
            {
                name: "Nguyen Van Truong Giang",
                age: 20,
                class: "CNTT-01",
                sex: "Nam"
            },
            {
                name: "Mai Thi Diem Quynh",
                age: 19,
                class: "CNTT-01",
                sex: "Nu"
            },
            {
                name: "Bui Kien Cuong",
                age: 19,
                class: "Logistics-01",
                sex: "Nam"
            },
            {
                name: "Dinh Quang Hieu",
                age: 18,
                class: "CK-11",
                sex: "Nam"
            },
        ]</code><br>
        <p>Hãy copy mảng trên vào trong trình viết code, phân tích các thuộc tính của từng học sinh, và viết ra các hàm như sau:</p>
        <p>a)Hàm thứ nhất đếm số học sinh là nữ, trả về qua</p>
        <code class="language-js">return</code><br>
        <p>b) Hàm thứ hai lưu tên của các học sinh trên 18 tuổi vào một mảng, trả về mảng đó</p>
        <p>c)Hàm thứ ba in ra tất cả tên và nghề nghiệp của các học sinh là nam và trên 18 tuổi</p>
        <p>d)Cho biết tuổi quan hệ tình dục hợp pháp ở Việt Nam là trên 16 tuổi, đếm số cặp nam nữ thỏa mãn yêu cầu này, và in ra màn hình</p>
        <p>Các kiến thức bổ trợ có thể tìm được ở những bài trên</p>
        <p> Chúc các bạn may mắn ! </p>
        `
    },
]