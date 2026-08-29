// src/js/modules/records.js
export function initRecords() {
  const defaultRecords = [
    {
      id: "#REC-2026-01",
      name: "Báo cáo Phát thải Scope 1 & 2 - Quý 1",
      category: "Môi trường (E)",
      status: "Đã hoàn tất",
      statusClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
      date: "28/08/2026"
    },
    {
      id: "#REC-2026-02",
      name: "Khảo sát Mức độ Hài lòng Nhân sự",
      category: "Xã hội (S)",
      status: "Đang xử lý",
      statusClass: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
      date: "27/08/2026"
    },
    {
      id: "#REC-2026-03",
      name: "Kiểm toán Bảo mật SOC 2 Type II",
      category: "Quản trị (G)",
      status: "Đã hoàn tất",
      statusClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
      date: "25/08/2026"
    },
    {
      id: "#REC-2026-04",
      name: "Tích hợp API Hệ thống Nhà máy EcoCorp",
      category: "Kỹ thuật / IoT",
      status: "Đang kết nối",
      statusClass: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      date: "24/08/2026"
    }
  ];

  const tableBody = document.getElementById("recordsTableBody");
  const searchInput = document.getElementById("searchRecord");
  const suggestionsBox = document.getElementById("searchSuggestions");
  
  const openModalBtn = document.getElementById("openCreateModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const cancelModalBtn = document.getElementById("cancelModalBtn");
  const createModal = document.getElementById("createRecordModal");
  const createForm = document.getElementById("createRecordForm");

  if (!tableBody) {
    console.warn("Không tìm thấy #recordsTableBody trong trang này!");
    return;
  }

  // Lấy dữ liệu từ localStorage, nếu không có hoặc rỗng thì dùng defaultRecords và lưu lại luôn
  let savedData = JSON.parse(localStorage.getItem("bloom_records"));
  let recordsData = (Array.isArray(savedData) && savedData.length > 0) ? savedData : defaultRecords;
  if (!savedData || savedData.length === 0) {
    localStorage.setItem("bloom_records", JSON.stringify(defaultRecords));
  }

  function renderTable(data) {
    if (!data || data.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-muted">Không tìm thấy bản ghi phù hợp.</td></tr>`;
      return;
    }

    tableBody.innerHTML = data.map(item => `
      <tr class="hover:bg-surface-alt/40 dark:hover:bg-surface-dark-alt/30 transition">
        <td class="p-4 font-mono text-xs text-brand-600 dark:text-emerald-400">${item.id}</td>
        <td class="p-4 font-medium">${item.name}</td>
        <td class="p-4 text-muted dark:text-muted-invert">${item.category}</td>
        <td class="p-4"><span class="px-2.5 py-1 text-xs rounded-full ${item.statusClass} font-semibold">${item.status}</span></td>
        <td class="p-4 text-right text-xs text-muted dark:text-muted-invert">${item.date}</td>
      </tr>
    `).join('');
  }

  // Render ngay lập tức khi load trang
  renderTable(recordsData);

  // Xử lý tìm kiếm & gợi ý
  if (searchInput && suggestionsBox) {
    searchInput.addEventListener("input", (e) => {
      const keyword = e.target.value.trim().toLowerCase();
      
      if (keyword === "") {
        suggestionsBox.classList.add("hidden");
        renderTable(recordsData);
        return;
      }

      const filtered = recordsData.filter(item => 
        item.name.toLowerCase().includes(keyword) || 
        item.id.toLowerCase().includes(keyword) || 
        item.category.toLowerCase().includes(keyword)
      );

      if (filtered.length > 0) {
        suggestionsBox.innerHTML = filtered.slice(0, 5).map(item => `
          <div class="p-2.5 hover:bg-surface-alt dark:hover:bg-surface-dark-alt cursor-pointer border-b border-line dark:border-line-invert last:border-none flex justify-between items-center suggestion-item" data-name="${item.name}">
            <span class="font-medium text-ink dark:text-ink-invert truncate pr-2">${item.name}</span>
            <span class="font-mono text-[10px] text-muted">${item.id}</span>
          </div>
        `).join('');
        suggestionsBox.classList.remove("hidden");

        document.querySelectorAll(".suggestion-item").forEach(el => {
          el.addEventListener("click", () => {
            searchInput.value = el.getAttribute("data-name");
            suggestionsBox.classList.add("hidden");
            renderTable(recordsData.filter(i => i.name.toLowerCase() === searchInput.value.toLowerCase()));
          });
        });
      } else {
        suggestionsBox.innerHTML = `<div class="p-3 text-muted text-center">Không có gợi ý phù hợp</div>`;
        suggestionsBox.classList.remove("hidden");
      }

      renderTable(filtered);
    });

    document.addEventListener("click", (e) => {
      if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
        suggestionsBox.classList.add("hidden");
      }
    });
  }

  // Điều khiển Modal
  const toggleModal = (show) => {
    if (!createModal) return;
    if (show) {
      createModal.classList.remove("hidden");
      createModal.classList.add("flex");
    } else {
      createModal.classList.add("hidden");
      createModal.classList.remove("flex");
    }
  };

  if (openModalBtn) openModalBtn.addEventListener("click", () => toggleModal(true));
  if (closeModalBtn) closeModalBtn.addEventListener("click", () => toggleModal(false));
  if (cancelModalBtn) cancelModalBtn.addEventListener("click", () => toggleModal(false));

  // Thêm bản ghi mới
  if (createForm) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nameField = document.getElementById("newRecordName");
      const categoryField = document.getElementById("newRecordCategory");
      const statusField = document.getElementById("newRecordStatus");

      if (!nameField) return;

      const name = nameField.value.trim();
      const category = categoryField ? categoryField.value : "Môi trường (E)";
      const status = statusField ? statusField.value : "Đã hoàn tất";

      let statusClass = "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300";
      if (status === "Đang xử lý") {
        statusClass = "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300";
      } else if (status === "Đang kết nối") {
        statusClass = "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300";
      }

      const newIdNum = recordsData.length + 1;
      const newId = `#REC-2026-${String(newIdNum).padStart(2, '0')}`;
      
      const now = new Date();
      const formattedDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

      const newRecord = {
        id: newId,
        name: name,
        category: category,
        status: status,
        statusClass: statusClass,
        date: formattedDate
      };

      recordsData.unshift(newRecord);
      localStorage.setItem("bloom_records", JSON.stringify(recordsData));

      renderTable(recordsData);
      createForm.reset();
      toggleModal(false);
    });
  }
}