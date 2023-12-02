function app() {
  const HIDDEN_CLASS = "hidden";
  const ITEM_CHECKED_CLASS = "item-checked";

  const menuTrigger = document.querySelector("#profile-menu");
  const notification = document.querySelector('.notification-popup');
  const notificationTrigger = document.querySelector('#notification-btn');
  const menu = document.querySelector(".menu-popup");
  const menuItems = document.querySelectorAll('[role="menuitem"]');

  const closeBtn = document.querySelector("#close-btn");
  const planCta = document.querySelector("#plan-cta");
  const mainAccordionBtn = document.querySelector('#main-accordion-control');
  const mainAccordion = document.querySelector('#accordion-step-guide');
  const mainSummary = document.querySelector('#main-summary')
  const arrow = document.querySelector('#arrow-down');
  const accordionElements = document.querySelectorAll('.details');

  const checkBoxBtn = document.querySelectorAll(".checkbox");
  const dashed = document.querySelector("#dashed");
  const spinner = document.querySelector("#spinner");
  const checked = document.querySelector("#checked");
  const dashed2 = document.querySelector("#dashed2");
  const spinner2 = document.querySelector("#spinner2");
  const checked2 = document.querySelector("#checked2");
  const dashed3 = document.querySelector("#dashed3");
  const spinner3 = document.querySelector("#spinner3");
  const checked3 = document.querySelector("#checked3");
  const dashed4 = document.querySelector("#dashed4");
  const spinner4 = document.querySelector("#spinner4");
  const checked4 = document.querySelector("#checked4");
  const dashed5 = document.querySelector("#dashed5");
  const spinner5 = document.querySelector("#spinner5");
  const checked5 = document.querySelector("#checked5");

  const checkBoxBtnStatus = document.querySelector("#checkbox-1-status");

  const progressElement = document.querySelector("#progress-bar");
  const progressBarWidth = progressElement.offsetWidth;
  const progressUpdateElement = document.querySelector(".progress-update span");

  // change logo when screen < or > 600px
  const imageElement = document.getElementById("logo");

  // media query object for screens less than or equal to 600px
  const mediaQuery = window.matchMedia("(max-width: 600px)");

  mediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      imageElement.src = "assets/Shopify.com svg.svg";
    } else {
      imageElement.src = "/assets/shopify-icon-desktop.svg";
    }
  });

  // notificttion trigger 
  notificationTrigger.addEventListener('click', () => {
    if (menu.classList.contains('menu-active')) {
      menu.classList.remove('menu-active')
    }
    notification.classList.toggle('menu-active')

    if (notification.classList.contains('menu-active')) {
      notificationTrigger.setAttribute('aria-expanded', 'true');
    } else {
      notificationTrigger.setAttribute('aria-expanded', 'false');
    }
  })

  // menu trigger
  menuTrigger.addEventListener("click", () => {
    if (notification.classList.contains('menu-active')) {
      notification.classList.remove('menu-active')
    }
    menu.classList.toggle("menu-active");
    menuItems[0].focus();

    if (menu.classList.contains('menu-active')) {
      menuTrigger.setAttribute('aria-expanded', 'true');
    } else {
      menuTrigger.setAttribute('aria-expanded', 'false');
    }
  });

  // close plan cta div function
  closeBtn.addEventListener("click", () => {
    planCta.style.display = "none";
  });

  // progress bar function
  let progressCount = 0;
  progressUpdateElement.textContent = progressCount;
  progressElement.style.width = `${(progressCount * progressBarWidth) / 5}px`;

  removeCheckedItem = () => {
    if (progressCount <= 0) {
      progressCount = 0;
      progressUpdateElement.textContent = 0;
    } else {
      progressCount--;
      progressUpdateElement.textContent = progressCount;
      progressElement.style.width = `${
        (progressCount * progressBarWidth) / 5
      }px`;
    }
  };

  addCheckedItem = () => {
    if (progressCount >= checkBoxBtn.length) {
      progressCount = checkBoxBtn.length;
      progressUpdateElement.textContent = checkBoxBtn.length;
    } else {
      progressCount++;
      progressUpdateElement.textContent = progressCount;
      progressElement.style.width = `${
        (progressCount * progressBarWidth) / 5
      }px`;
    }
  };

  // main accordion defult stte on page load 
  mainAccordion.setAttribute('open', 'true');
  mainSummary.setAttribute('aria-expanded', 'true');
  arrow.style.transform = `rotate(180deg)`;


  mainAccordion.addEventListener('click', () => {
    if (!mainAccordion.hasAttribute('open')) {
      rotate = 180;
      arrow.style.transform = `rotate(${rotate}deg)`;
      mainSummary.setAttribute('aria-expanded', 'true');
    } else {
      rotate = 0;
      arrow.style.transform = `rotate(${rotate}deg)`;
      mainSummary.setAttribute('aria-expanded', 'false');
    }
  })

  // function to control main accordion open/close 
  mainAccordionBtn.addEventListener('click', () => {
    if (!mainAccordion.hasAttribute('open')) {
      rotate = 180;
      mainAccordion.setAttribute('open', 'true');
      mainSummary.setAttribute('aria-expanded', 'true');
      arrow.style.transform = `rotate(${rotate}deg)`;
      console.log('true')
    } else {
      rotate = 0;
      mainAccordion.removeAttribute('open');
      mainSummary.setAttribute('aria-expanded', 'false');
      arrow.style.transform = `rotate(${rotate}deg)`;
      console.log('false')
    }
  })

    // function to add event listener to all accordions
    for (const accordionElement of accordionElements) {
      const summary = accordionElement.querySelector('summary');
      const accordionHandler = summary.lastElementChild;
      
      // function to remove class and attribute from previous expanded accordion 
      accordionElement.addEventListener('click', () => {
        for (const checkAccordionElement of accordionElements) {
          const summary = checkAccordionElement.querySelector('summary');
          const accordionHandler = summary.lastElementChild;

          checkAccordionElement.classList.remove('active-accordion')
          checkAccordionElement.removeAttribute('open');
          accordionHandler.classList.remove('bold-text')
          accordionHandler.setAttribute('aria-expanded', 'false');
        }

        // function to add class and attribute to current selected accordion 
        accordionElement.classList.toggle('active-accordion');

        if (accordionElement.classList.contains('active-accordion'))  {
          accordionElement.setAttribute('open', 'true');
          accordionHandler.setAttribute('aria-expanded', 'true');
          accordionHandler.classList.add('bold-text')
        }
      });
    }

  

  function handleCheckedItem(id, clickedButton) {
    if (id === "checkbox-1") {
      dashed.classList.add(HIDDEN_CLASS);

      spinner.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner.classList.add(HIDDEN_CLASS);
        checked.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as done",
          "as not done"
        );
        clickedButton.classList.add(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked customize theme as done";

        addCheckedItem();
      }, 500);
    } else if (id === "checkbox-2") {
      dashed2.classList.add(HIDDEN_CLASS);

      spinner2.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner2.classList.add(HIDDEN_CLASS);
        checked2.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as done",
          "as not done"
        );
        clickedButton.classList.add(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked add your first product as done";

        addCheckedItem();
      }, 500);
    } else if (id === "checkbox-3") {
      dashed3.classList.add(HIDDEN_CLASS);

      spinner3.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner3.classList.add(HIDDEN_CLASS);
        checked3.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as done",
          "as not done"
        );
        clickedButton.classList.add(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked add a custom domain as done";

        addCheckedItem();
      }, 500);
    } else if (id === "checkbox-4") {
      dashed4.classList.add(HIDDEN_CLASS);

      spinner4.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner4.classList.add(HIDDEN_CLASS);
        checked4.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as done",
          "as not done"
        );
        clickedButton.classList.add(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked name your store as done";

        addCheckedItem();
      }, 500);
    } else {
      dashed5.classList.add(HIDDEN_CLASS);

      spinner5.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner5.classList.add(HIDDEN_CLASS);
        checked5.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as done",
          "as not done"
        );
        clickedButton.classList.add(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked setup a payment provider as not done";

        addCheckedItem();
      }, 500);
    }
  }

  function handleUnCheckedItem(id, clickedButton) {
    if (id === "checkbox-1") {
      checked.classList.add(HIDDEN_CLASS);
      spinner.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner.classList.add(HIDDEN_CLASS);
        dashed.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as not done",
          "as done"
        );
        clickedButton.classList.remove(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked add a custom domain as not done";

        removeCheckedItem();
      }, 500);
    } else if (id === "checkbox-2") {
      checked2.classList.add(HIDDEN_CLASS);
      spinner2.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner2.classList.add(HIDDEN_CLASS);
        dashed2.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as not done",
          "as done"
        );
        clickedButton.classList.remove(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked add your first product as not done";

        removeCheckedItem();
      }, 500);
    } else if (id === "checkbox-3") {
      checked3.classList.add(HIDDEN_CLASS);
      spinner3.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner3.classList.add(HIDDEN_CLASS);
        dashed3.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as not done",
          "as done"
        );
        clickedButton.classList.remove(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked customize theme as not done";

        removeCheckedItem();
      }, 500);
    } else if (id === "checkbox-4") {
      checked4.classList.add(HIDDEN_CLASS);
      spinner4.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner4.classList.add(HIDDEN_CLASS);
        dashed4.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as not done",
          "as done"
        );
        clickedButton.classList.remove(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked name your store as not done";

        removeCheckedItem();
      }, 500);
    } else {
      checked5.classList.add(HIDDEN_CLASS);
      spinner5.classList.remove(HIDDEN_CLASS);

      checkBoxBtnStatus.ariaLabel = "Loading, please wait...";
      setTimeout(() => {
        spinner5.classList.add(HIDDEN_CLASS);
        dashed5.classList.remove(HIDDEN_CLASS);
        clickedButton.ariaLabel = clickedButton.ariaLabel.replace(
          "as not done",
          "as done"
        );
        clickedButton.classList.remove(ITEM_CHECKED_CLASS);

        checkBoxBtnStatus.ariaLabel =
          "Succesfully marked customize theme as not done";

        removeCheckedItem();
      }, 500);
    }
  }

  // function to handle checked and unchecked
  function handleCheckedOrUncheckedItems(clickedButton) {
    const checkedItem = clickedButton.classList.contains(ITEM_CHECKED_CLASS);
    const id = clickedButton.getAttribute("id");

    if (checkedItem) {
      handleUnCheckedItem(id, clickedButton);
    } else {
      handleCheckedItem(id, clickedButton);
    }
  }

  // function to prevent handleCheckedOrUncheckedItems functionfromrunning multiple times
  function debounce(fn, delay) {
    let timer;

    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }

  const debouncedHandleCheckedOrUncheckedItems = debounce(
    handleCheckedOrUncheckedItems,
    300
  );

  // add event listener to all checkbox button
  checkBoxBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clickedButton = e.currentTarget;
      debouncedHandleCheckedOrUncheckedItems(clickedButton);
    });
  });
}

app();
