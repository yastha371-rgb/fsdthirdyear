<!DOCTYPE html>
<html>
<head>
    <title>Even Numbers</title>
</head>
<body>

<script>
    let num = prompt("Enter any number (example: 100):");

    if (num !== null) {
        num = Number(num);

        for (let i = 1; i <= num; i++) {
            if (i % 2 === 0) {
                document.write(i + "<br>");
            }
        }
    }
</script>

</body>
</html>
