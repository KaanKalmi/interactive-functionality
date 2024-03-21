var checkboxes = document.querySelectorAll('input[type="checkbox"]');

var countElement = document.getElementById('count');

function countCheckedCheckboxes() {
    var count = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            count++;
        }
    });
    return count;
}

function updateCount() {
    var count = countCheckedCheckboxes();
    countElement.textContent = count + ' checkboxes selected';
}

updateCount();

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', updateCount);
});